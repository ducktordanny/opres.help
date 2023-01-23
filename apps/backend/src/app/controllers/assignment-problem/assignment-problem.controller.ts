import {Body, Controller, Param, Post, Query} from '@nestjs/common';

import {AssignmentProblemType, Table, ZeroFindingMethod} from '@opres/shared/types';

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
    @Query('type') problemType: AssignmentProblemType,
  ) {
    return this.hungarianMethodService.calculate(
      assignmentTable,
      zeroFindingMethod || ZeroFindingMethod.Greedy,
      problemType || AssignmentProblemType.Min,
    );
  }

  @Post('reduce')
  public getReducedTable(@Body() assignmentTable: Table, @Query('type') problemType: AssignmentProblemType) {
    return this.reduceService.calculate(assignmentTable, problemType || AssignmentProblemType.Min);
  }

  @Post('koenig-algorithm')
  public getKoenigAlgoResult(
    @Body() reducedAssignmentTable: Table,
    @Query('zero-finding-method') zeroFindingMethod: ZeroFindingMethod,
  ) {
    return this.koenigAlgoService.calculate(reducedAssignmentTable, zeroFindingMethod || ZeroFindingMethod.Greedy);
  }

  @Post('independent-zeros/:method')
  public getIndependentZeros(@Body() reducedAssignmentTable: Table, @Param('method') method: ZeroFindingMethod) {
    return this.koenigAlgoService.findIndependentZeros[method](reducedAssignmentTable);
  }
}
