import {Injectable} from '@nestjs/common';

import {
  AssignmentProblemType,
  HungarianMethodResponse,
  HungarianMethodTransformation,
  ProblemTable,
  SelectedCell,
  TableLineSelections,
  ZeroFindingMethod,
} from '@opres/shared/types';
import {cloneDeep, forEach, last} from 'lodash';

import {KoenigAlgorithmService} from './koenig-algorithm.service';
import {ReduceService} from './reduce.service';

@Injectable()
export class HungarianMethodService {
  constructor(
    private koenigAlgorithmService: KoenigAlgorithmService,
    private reduceService: ReduceService,
  ) {}

  public calculate(
    assignmentTable: ProblemTable,
    zeroFindingMethod: ZeroFindingMethod,
    problemType: AssignmentProblemType,
  ): HungarianMethodResponse {
    const reduceResult = this.reduceService.calculate(assignmentTable, problemType);
    const process: HungarianMethodResponse = [
      {reduce: reduceResult, currentTable: assignmentTable},
    ];

    let currentTable = cloneDeep(reduceResult.reduce);
    let koenigMethodResponse = this.koenigAlgorithmService.calculate(
      currentTable,
      zeroFindingMethod,
    );
    let strikeThroughs = last(koenigMethodResponse).strikeThroughs;

    while (strikeThroughs) {
      const epsilon = this.getEpsilon(currentTable, strikeThroughs);
      const transformation = this.transformation(currentTable, strikeThroughs, epsilon);
      process.push(
        cloneDeep({
          currentTable,
          koenigAlgorithm: koenigMethodResponse,
          transformation,
        }),
      );
      currentTable = cloneDeep(transformation.outputTable);
      koenigMethodResponse = this.koenigAlgorithmService.calculate(currentTable, zeroFindingMethod);
      strikeThroughs = last(koenigMethodResponse).strikeThroughs;
    }

    process.push(
      cloneDeep({
        currentTable,
        koenigAlgorithm: koenigMethodResponse,
      }),
    );
    return process;
  }

  /*
   * - Where we don't have any strike-throughs we subtract the cell's value with Epsilon
   * - Where we have two strike-throughs (crossing each other) we add Epsilon to the cell's value
   */
  private transformation(
    table: ProblemTable,
    strikeThroughs: TableLineSelections,
    epsilon: number,
  ): HungarianMethodTransformation {
    const outputTable = cloneDeep(table);
    const transformCells: Array<SelectedCell> = [];

    forEach(outputTable, (row, rowIndex) => {
      forEach(row, (cell, columnIndex) => {
        const hasRowStrikeThrough = this.hasStrikeThrough(strikeThroughs.rows, rowIndex);
        const hasColumnStrikeThrough = this.hasStrikeThrough(strikeThroughs.columns, +columnIndex);
        if (hasColumnStrikeThrough && hasRowStrikeThrough) {
          outputTable[rowIndex][columnIndex] = cell + epsilon;
          transformCells.push({x: +columnIndex, y: rowIndex, value: epsilon});
        }
        if (!hasRowStrikeThrough && !hasColumnStrikeThrough) {
          outputTable[rowIndex][columnIndex] = cell - epsilon;
          transformCells.push({x: +columnIndex, y: rowIndex, value: -epsilon});
        }
      });
    });

    return {outputTable, transformCells, strikeThroughs, epsilon};
  }

  /*
   * The minimum value of the cells where we don't have strike-throughs. (should be positive number, not 0)
   */
  private getEpsilon(table: ProblemTable, strikeThroughs: TableLineSelections): number {
    let epsilon = Infinity;

    forEach(table, (row, rowIndex) => {
      if (this.hasStrikeThrough(strikeThroughs.rows, rowIndex)) return;
      forEach(row, (cell, columnIndex) => {
        if (this.hasStrikeThrough(strikeThroughs.columns, +columnIndex)) return;
        if (epsilon > cell) epsilon = cell;
      });
    });

    return epsilon;
  }

  private hasStrikeThrough = (strikeThroughsArray: Array<number>, lineIndex: number): boolean =>
    strikeThroughsArray.some((index) => index === lineIndex);
}
