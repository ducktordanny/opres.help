import {Body, Controller, Post, UseGuards} from '@nestjs/common';

import {ProblemTable} from '@opres/shared/types';

import {TspGuard} from './guards/tsp.guard';
import {BnbService} from './services/bnb.service';
import {ReduceService} from './services/reduce.service';

@UseGuards(TspGuard)
@Controller('tsp')
export class TspController {
  constructor(private reduceService: ReduceService, private bnbService: BnbService) {}

  @Post('reduce')
  public reduceTspTable(@Body() tspTable: ProblemTable) {
    return this.reduceService.calculate(tspTable);
  }

  @Post('bnb')
  public getPathByBnb(@Body() tspTable: ProblemTable) {
    const reducedTable = this.reduceService.calculate(tspTable);
    return this.bnbService.calculate(reducedTable);
  }
}
