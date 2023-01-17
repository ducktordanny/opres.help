import {Injectable} from '@nestjs/common';

import {SelectedCell, Table} from '@opres/shared/types';
import {forEach, isEmpty, keys, pickBy, remove} from 'lodash';

import {getColumnUtil} from '../../../utils/get-column.util';

export enum ZeroFindingMethod {
  Heuristics = 'heuristics',
  Greedy = 'greedy',
}

interface TableLineSelections {
  rows: Array<number>;
  columns: Array<number>;
}

interface KoenigAlgoResponse {
  selectedIndependentZeros: Array<SelectedCell>;
  strikeThroughs?: TableLineSelections;
}

interface RowToColumnMarks {
  [columnIndex: number]: number;
}

/**
 * Should be used to find which columns and rows can be "skipped".
 */
@Injectable()
export class KoenigAlgorithmService {
  public findIndependentZeros: Record<ZeroFindingMethod, (_: Table) => Array<SelectedCell>> = {
    [ZeroFindingMethod.Greedy]: this.findIndependentZerosWithGreedyMethod,
    [ZeroFindingMethod.Heuristics]: this.findIndependentZerosWithHeuristics,
  };

  public calculate(reducedAssignmentTable: Table, zeroFindingMethod: ZeroFindingMethod): KoenigAlgoResponse {
    const selectedIndependentZeros = this.findIndependentZeros[zeroFindingMethod](reducedAssignmentTable);
    if (selectedIndependentZeros.length === reducedAssignmentTable.length) return {selectedIndependentZeros};

    const reachedRows: Array<number> = [];
    const targetColumns: Array<number> = [];
    const verifiedLines: TableLineSelections = {rows: [], columns: []};
    let rowToColumnMarks: RowToColumnMarks = {};

    this.fillInitialPoints(reducedAssignmentTable.length, selectedIndependentZeros, reachedRows, targetColumns);
    while (!isEmpty(reachedRows)) {
      const hasWayToColumn = this.findWaysToColumns(
        reducedAssignmentTable,
        selectedIndependentZeros,
        reachedRows,
        verifiedLines,
        rowToColumnMarks,
      );
      if (!hasWayToColumn) {
        const strikeThroughs = this.getStrikeThroughs(reducedAssignmentTable.length, verifiedLines);
        return {selectedIndependentZeros, strikeThroughs};
      }
      const markWithTarget = this.getMarkWithTarget(rowToColumnMarks, targetColumns);
      if (markWithTarget !== undefined) {
        this.searchBack(selectedIndependentZeros, rowToColumnMarks, markWithTarget);
        rowToColumnMarks = {};
        remove(reachedRows, () => true);
        remove(targetColumns, () => true);
        verifiedLines.rows = [];
        verifiedLines.columns = [];
        this.fillInitialPoints(reducedAssignmentTable.length, selectedIndependentZeros, reachedRows, targetColumns);
        continue;
      }
      this.findWaysToRows(selectedIndependentZeros, reachedRows, verifiedLines, rowToColumnMarks);
    }

    return {selectedIndependentZeros};
  }

  private getMarkWithTarget(rowToColumnMarks: RowToColumnMarks, targetColumns: Array<number>): number | undefined {
    return targetColumns.find((target) => {
      const marks = keys(rowToColumnMarks);
      return marks.some((mark) => +mark === target);
    });
  }

  private getStrikeThroughs(n: number, verifiedLines: TableLineSelections): TableLineSelections {
    const strikeThroughs: TableLineSelections = {rows: [], columns: []};
    for (let index = 0; index < n; index++) {
      if (!verifiedLines.rows.some((rowIndex) => rowIndex === index)) strikeThroughs.rows.push(index);
      if (verifiedLines.columns.some((columnIndex) => columnIndex === index)) strikeThroughs.columns.push(index);
    }
    return strikeThroughs;
  }

  private searchBack(
    independentZeros: Array<SelectedCell>,
    rowToColumnMarks: RowToColumnMarks,
    reachedTargetColumn: number,
  ): void {
    let rowIndex = rowToColumnMarks[reachedTargetColumn];
    let columnIndex = reachedTargetColumn;
    let hasIndieZeroInRow;

    do {
      hasIndieZeroInRow = independentZeros.some((indieZero) => indieZero.y === rowIndex);
      const indexOfCurrentIndieZero = independentZeros.findIndex((indieZero) => indieZero.y === rowIndex);
      if (indexOfCurrentIndieZero === -1) {
        independentZeros.push({x: columnIndex, y: rowIndex});
        continue;
      }
      const nextColumnIndex = independentZeros[indexOfCurrentIndieZero].x;
      independentZeros[indexOfCurrentIndieZero].x = columnIndex;
      columnIndex = nextColumnIndex;
      rowIndex = rowToColumnMarks[columnIndex];
    } while (hasIndieZeroInRow);
  }

  private findWaysToRows(
    independentZeros: Array<SelectedCell>,
    reachedRows: Array<number>,
    verifiedLines: TableLineSelections,
    rowToColumnMarks: RowToColumnMarks,
  ): void {
    const unverifiedColumns = keys(rowToColumnMarks).filter(
      (mark) => !verifiedLines.columns.some((index) => index === +mark),
    );
    const switchingPoints = independentZeros.filter((cell) =>
      unverifiedColumns.some((columnIndex) => +columnIndex === cell.x),
    );
    for (const switchingPoint of switchingPoints) {
      reachedRows.push(switchingPoint.y);
      verifiedLines.columns.push(switchingPoint.x);
    }
  }

  private findWaysToColumns(
    table: Table,
    independentZeros: Array<SelectedCell>,
    reachedRows: Array<number>,
    verifiedLines: TableLineSelections,
    rowToColumnMarks: RowToColumnMarks,
  ): boolean {
    let hasFoundWays = false;
    for (const reachedRow of reachedRows) {
      const row = table[reachedRow];
      const zeroCells = pickBy(row, (cell) => cell === 0);
      const zeroColumns = keys(zeroCells).filter(
        (zeroColumn) =>
          !this.isCellIndependent(independentZeros, reachedRow, +zeroColumn) &&
          !keys(rowToColumnMarks).some((index) => index === zeroColumn),
      );
      for (const zeroColumn of zeroColumns) {
        rowToColumnMarks[+zeroColumn] = reachedRow;
        hasFoundWays = true;
      }
      verifiedLines.rows.push(reachedRow);
    }
    remove(reachedRows, () => true);
    return hasFoundWays;
  }

  private findIndependentZerosWithGreedyMethod(table: Table): Array<SelectedCell> {
    const selectedZeros: Array<SelectedCell> = [];
    const isCellTaken = (rowIndex: number, columnIndex: number) =>
      selectedZeros?.some((selection) => selection.y === rowIndex || selection.x === columnIndex);

    forEach(table, (row, rowIndex: number) => {
      forEach(row, (cell, columnKey: string) => {
        if (cell === 0 && !isCellTaken(rowIndex, +columnKey)) selectedZeros.push({x: +columnKey, y: rowIndex});
      });
    });

    return selectedZeros;
  }

  private findIndependentZerosWithHeuristics(table: Table): Array<SelectedCell> {
    const independentZeros: Array<SelectedCell> = [];
    let nextIndependentZeros: SelectedCell | null = null;
    do {
      nextIndependentZeros = KoenigAlgorithmService.getIndependentZero(table, independentZeros);
      if (nextIndependentZeros) independentZeros.push(nextIndependentZeros);
    } while (nextIndependentZeros !== null);
    return independentZeros;
  }

  private static getIndependentZero(table: Table, independentZeros: Array<SelectedCell>): SelectedCell | null {
    for (const [rowIndex, row] of table.entries()) {
      if (independentZeros.some((cell) => cell.y === rowIndex)) continue;
      const possibleIndependentZerosObject = pickBy(
        row,
        (cell, columnIndex) =>
          cell === 0 && KoenigAlgorithmService.canCellBeAnIndependentZero(independentZeros, rowIndex, +columnIndex),
      );
      const possibleIndependentZerosKeys = keys(possibleIndependentZerosObject);
      if (possibleIndependentZerosKeys.length === 1)
        return {
          x: +possibleIndependentZerosKeys[0],
          y: rowIndex,
        } as SelectedCell;
    }
    for (let columnIndex = 0; columnIndex < table.length; columnIndex++) {
      const column = getColumnUtil(table, columnIndex);
      const possibleIndependentZerosObject = pickBy(
        column,
        (cell, rowIndex) =>
          cell === 0 && KoenigAlgorithmService.canCellBeAnIndependentZero(independentZeros, +rowIndex, columnIndex),
      );
      const possibleIndependentZerosKeys = keys(possibleIndependentZerosObject);
      if (possibleIndependentZerosKeys.length === 1)
        return {
          x: columnIndex,
          y: +possibleIndependentZerosKeys[0],
        } as SelectedCell;
    }
    return null;
  }

  private static canCellBeAnIndependentZero = (
    independentZeros: Array<SelectedCell>,
    rowIndex: number,
    columnIndex: number,
  ): boolean => !independentZeros.some((cell) => cell.x === columnIndex || cell.y === rowIndex);

  private isCellIndependent = (independentZeros: Array<SelectedCell>, rowIndex: number, columnIndex: number) =>
    independentZeros.some((independentZero) => independentZero.x === columnIndex && independentZero.y === rowIndex);

  private fillInitialPoints(
    n: number,
    selectedIndependentZeros: Array<SelectedCell>,
    reachedRows: Array<number>,
    targetColumns?: Array<number>,
  ): void {
    for (let index = 0; index < n; index++) {
      const isTargetColumn =
        targetColumns && !selectedIndependentZeros.some((selectedZero) => selectedZero.x === index);
      const isReachedRow = !selectedIndependentZeros.some((selectedZero) => selectedZero.y === index);
      if (isTargetColumn) targetColumns.push(index);
      if (isReachedRow) reachedRows.push(index);
    }
  }
}
