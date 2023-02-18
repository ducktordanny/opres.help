import {Injectable} from '@nestjs/common';

import {ProblemTable} from '@opres/shared/types';

import {reduceByColumns, reduceByRows} from '../../../utils/reduce.util';

@Injectable()
export class ReduceService {
  public calculate(table: ProblemTable) {
    const reduceFirstPart = reduceByRows(table, this.reducerCallback, Infinity);
    return reduceByColumns(reduceFirstPart, this.reducerCallback, Infinity);
  }

  private reducerCallback = (cell: number | null, min: number): number | null =>
    cell === null ? cell : cell - min;
}
