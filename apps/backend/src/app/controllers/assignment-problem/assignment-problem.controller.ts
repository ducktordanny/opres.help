import {Body, Controller, Param, Post, Query} from '@nestjs/common';

import {SelectedCell, Table} from '@opres/shared/types';

import {KoenigAlgorithmService, ZeroFindingMethod} from './services/koenig-algorithm.service';
import {ReduceService} from './services/reduce.service';

@Controller('assignment-problem')
export class AssignmentProblemController {
  constructor(private reduceService: ReduceService, private koenigAlgoService: KoenigAlgorithmService) {}

  @Post('reduce')
  public getReducedTable(@Body() assignmentTable: Table): Table {
    return this.reduceService.calculate(assignmentTable);
  }

  @Post('hungarian-method')
  public getHungarianMethodResult(
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
