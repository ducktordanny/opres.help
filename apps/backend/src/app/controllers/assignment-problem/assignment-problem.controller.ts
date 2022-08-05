import {Body, Controller, Post} from '@nestjs/common';

import {Table} from '@opres/shared/types';

import {FirstPhaseService} from './services/first-phase.service';
import {SecondPhaseService} from './services/second-phase.service';

@Controller('assignment-problem')
export class AssignmentProblemController {
  constructor(
    private firstPhaseService: FirstPhaseService,
    private secondPhaseService: SecondPhaseService,
  ) {}

  @Post('first-phase')
  public calculateFirstPhase(@Body() assignmentTable: Table): Table {
    return this.firstPhaseService.calculate(assignmentTable);
  }

  @Post('second-phase')
  public calculateSecondPhase(@Body() assignmentTable: Table): Table {
    return this.secondPhaseService.calculate(assignmentTable);
  }
}
