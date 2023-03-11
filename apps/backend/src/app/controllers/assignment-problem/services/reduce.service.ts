import {Injectable} from '@nestjs/common';

import {AssignmentProblemType, ProblemTable, ReduceResponse} from '@opres/shared/types';
import {cloneDeep, forEach} from 'lodash';

import {reduceByColumns, reduceByRows} from '../../../utils/reduce.util';

@Injectable()
export class ReduceService {
  public calculate(
    assignmentTable: ProblemTable,
    problemType: AssignmentProblemType,
  ): ReduceResponse {
    const negativeValuesTransformation = this.checkAndHandleNegativeValues(assignmentTable);
    const maxToMinTransformation =
      problemType === AssignmentProblemType.Max
        ? this.maxToMinProblem(negativeValuesTransformation || assignmentTable)
        : undefined;
    const reduceFirstPart = reduceByRows(
      maxToMinTransformation || negativeValuesTransformation || assignmentTable,
      this.reducerCallback,
    );
    const reduce = reduceByColumns(reduceFirstPart, this.reducerCallback);
    return {
      reduce,
      negativeValuesTransformation,
      maxToMinTransformation,
    };
  }

  public checkAndHandleNegativeValues(table: ProblemTable): ProblemTable {
    const responseTable = cloneDeep(table);
    let min = Infinity;

    forEach(responseTable, (row) => {
      forEach(row, (cell) => {
        if (min > cell) min = cell;
      });
    });
    if (min >= 0) return;

    forEach(responseTable, (row, rowIndex) => {
      forEach(row, (cell, columnIndex) => {
        responseTable[rowIndex][columnIndex] = cell + Math.abs(min);
      });
    });

    return responseTable;
  }

  public maxToMinProblem(table: ProblemTable): ProblemTable {
    const responseTable = cloneDeep(table);
    let max = -Infinity;

    forEach(responseTable, (row) => {
      forEach(row, (cell) => {
        if (max < cell) max = cell;
      });
    });
    forEach(responseTable, (row, rowIndex) => {
      forEach(row, (cell, columnIndex) => {
        responseTable[rowIndex][columnIndex] = max - cell;
      });
    });

    return responseTable;
  }

  private reducerCallback = (cell: number | null, min: number): number | null => (cell ?? 0) - min;
}
