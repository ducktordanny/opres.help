import {Body, Controller, Param, Post, Query} from '@nestjs/common';

import {SelectedCell, Table, ZeroFindingMethod} from '@opres/shared/types';

import {KoenigAlgorithmService} from './services/koenig-algorithm.service';
import {ReduceService} from './services/reduce.service';

@Controller('assignment-problem')
export class AssignmentProblemController {
  constructor(private reduceService: ReduceService, private koenigAlgoService: KoenigAlgorithmService) {}

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
