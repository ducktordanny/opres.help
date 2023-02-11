import {Injectable} from '@nestjs/common';

import {AssignmentProblemType, ProblemTable, ReduceResponse} from '@opres/shared/types';
import {cloneDeep, forEach} from 'lodash';

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
    const reduceFirstPart = this.reduceByRows(
      maxToMinTransformation || negativeValuesTransformation || assignmentTable,
    );
    return {
      reduce: this.reduceByColumns(reduceFirstPart),
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

  private reduceByRows(table: ProblemTable): ProblemTable {
    const responseTable = cloneDeep(table);
    for (const [index, row] of responseTable.entries()) {
      const rowElements = Object.values(row) as Array<number>;
      const minimumOfRow = Math.min(...rowElements);
      for (const [key, value] of Object.entries(row))
        responseTable[index][+key] = (value || 0) - minimumOfRow;
    }
    return responseTable;
  }

  private reduceByColumns(table: ProblemTable): ProblemTable {
    for (let index = 0; index < table.length; index++) {
      const columnElements = table.map((value) => value[index] || 0);
      const minimumOfColumn = Math.min(...columnElements);
      for (const element of table) element[index] = (element[index] || 0) - minimumOfColumn;
    }
    return table;
  }
}
