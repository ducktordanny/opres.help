import {Body, Controller, Param, Post, Query} from '@nestjs/common';

import {SelectedCell, Table, ZeroFindingMethod} from '@opres/shared/types';

import {HungarianMethodService} from './services/hungarian-method.service';
import {KoenigAlgorithmService} from './services/koenig-algorithm.service';
import {ReduceService} from './services/reduce.service';

@Controller('assignment-problem')
export class AssignmentProblemController {
  constructor(
    private reduceService: ReduceService,
    private koenigAlgoService: KoenigAlgorithmService,
    private hungarianMethodService: HungarianMethodService,
  ) {}

  @Post()
  public getFullResult(
    @Body() assignmentTable: Table,
    @Query('zero-finding-method') zeroFindingMethod: ZeroFindingMethod,
  ) {
    const reducedTable = this.reduceService.calculate(assignmentTable);
    return this.hungarianMethodService.calculate(reducedTable, zeroFindingMethod || ZeroFindingMethod.Greedy);
  }

  @Post('reduce')
  public getReducedTable(@Body() assignmentTable: Table): Table {
    return this.reduceService.calculate(assignmentTable);
  }

  @Post('koenig-algorithm')
  public getKoenigAlgoResult(
    @Body() reducedAssignmentTable: Table,
    @Query('zero-finding-method') zeroFindingMethod: ZeroFindingMethod,
  ) {
    return this.koenigAlgoService.calculate(reducedAssignmentTable, zeroFindingMethod || ZeroFindingMethod.Greedy);
  }

  @Post('independent-zeros/:method')
  public getIndependentZeros(
    @Body() reducedAssignmentTable: Table,
    @Param('method') method: ZeroFindingMethod,
  ): Array<SelectedCell> {
    return this.koenigAlgoService.findIndependentZeros[method](reducedAssignmentTable);
  }
}
