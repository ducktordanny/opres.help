import {Injectable} from '@nestjs/common';

import {Table, TableLineSelections, ZeroFindingMethod} from '@opres/shared/types';
import {cloneDeep, forEach, last} from 'lodash';

import {KoenigAlgorithmService} from './koenig-algorithm.service';

@Injectable()
export class HungarianMethodService {
  constructor(private koenigAlgorithmService: KoenigAlgorithmService) {}

  public calculate(reducedAssignmentTable: Table, zeroFindingMethod: ZeroFindingMethod) {
    let transformTable = cloneDeep(reducedAssignmentTable);
    let koenigMethodResponse = this.koenigAlgorithmService.calculate(reducedAssignmentTable, zeroFindingMethod);
    let strikeThroughs = last(koenigMethodResponse).strikeThroughs;
    while (strikeThroughs) {
      transformTable = this.transformation(transformTable, strikeThroughs);
      koenigMethodResponse = this.koenigAlgorithmService.calculate(transformTable, zeroFindingMethod);
      strikeThroughs = last(koenigMethodResponse).strikeThroughs;
    }
    return last(koenigMethodResponse).selectedIndependentZeros;
  }

  /*
   * - Where we don't have any strike-throughs we subtract the cell's value with Epsilon
   * - Where we have two strike-throughs (crossing each other) we add Epsilon to the cell's value
   */
  private transformation(table: Table, strikeThroughs: TableLineSelections) {
    const epsilon = this.getEpsilon(table, strikeThroughs);
    const transformedTable = cloneDeep(table);

    forEach(transformedTable, (row, rowIndex) => {
      forEach(row, (cell, columnIndex) => {
        const hasRowStrikeThrough = this.hasStrikeThrough(strikeThroughs.rows, rowIndex);
        const hasColumnStrikeThrough = this.hasStrikeThrough(strikeThroughs.columns, +columnIndex);
        if (hasColumnStrikeThrough && hasRowStrikeThrough) transformedTable[rowIndex][columnIndex] = cell + epsilon;
        if (!hasRowStrikeThrough && !hasColumnStrikeThrough) transformedTable[rowIndex][columnIndex] = cell - epsilon;
      });
    });

    return transformedTable;
  }

  /*
   * The minimum value of the cells where we don't have strike-throughs. (should be positive number, not 0)
   */
  private getEpsilon(table: Table, strikeThroughs: TableLineSelections): number {
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
