import {Body, Controller, Param, Post, Query, UseGuards} from '@nestjs/common';

import {
  CalculationMode,
  Epsilon,
  FirstPhaseStep,
  SecondPhaseStep,
  TPData,
  TPMethods,
  TransportTable,
} from '@opres/shared/types';

import {EpsilonGuard} from './guards/epsilon.guard';
import {FirstPhaseGuard} from './guards/first-phase.guard';
import {SecondPhaseGuard} from './guards/second-phase.guard';
import {NorthWestMethodService} from './services/first-phase/north-west.method.service';
import {TableMinimumMethodService} from './services/first-phase/table-minimum.method.service';
import {VogelKordaMethodService} from './services/first-phase/vogel-korda.method.service';
import {SecondPhaseService} from './services/second-phase.service';
import {getEpsilon} from './utils/epsilon.util';

@Controller('transport-problem')
export class TransportProblemController {
  private firstPhaseServices = {
    'north-west': this.northWestMethod,
    'table-min': this.tableMinimumMethod,
    'vogel-korda': this.vogelKordaMethod,
  };

  constructor(
    private northWestMethod: NorthWestMethodService,
    private tableMinimumMethod: TableMinimumMethodService,
    private vogelKordaMethod: VogelKordaMethodService,
    private secondPhaseService: SecondPhaseService,
  ) {}

  @UseGuards(FirstPhaseGuard)
  @Post('first-phase/:method')
  public calculateFirstPhase(
    @Param('method') method: TPMethods,
    @Query('mode') mode: CalculationMode = 'explanations',
    @Body() tPData: TPData,
  ): Array<FirstPhaseStep> {
    return this.firstPhaseServices[method].calculate(tPData, mode);
  }

  @UseGuards(SecondPhaseGuard)
  @Post('second-phase')
  public calculateSecondPhase(
    @Query('mode') mode: CalculationMode = 'explanations',
    @Body() transportTable: TransportTable,
  ): Array<SecondPhaseStep> {
    return this.secondPhaseService.calculate(transportTable, mode);
  }

  @UseGuards(EpsilonGuard)
  @Post('epsilon')
  public calculateEpsilonsValue(
    @Query('explanation') explanation = true,
    @Body() transportTable: TransportTable,
  ): Epsilon {
    return getEpsilon(transportTable, explanation);
  }
}
