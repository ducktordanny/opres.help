import {Injectable} from '@nestjs/common';

import {
  ColumnToRowMarks,
  KoenigAlgoResponse,
  KoenigAlgoStep,
  SelectedCell,
  Table,
  TableLineSelections,
  ZeroFindingMethod,
} from '@opres/shared/types';
import {cloneDeep, forEach, isEmpty, keys, pickBy} from 'lodash';

import {getColumnUtil} from '../../../utils/get-column.util';

/**
 * Should be used to find which columns and rows can be "skipped".
 */
@Injectable()
export class KoenigAlgorithmService {
  public findIndependentZeros: Record<ZeroFindingMethod, (_: Table) => Array<SelectedCell>> = {
    [ZeroFindingMethod.Greedy]: this.findIndependentZerosWithGreedyMethod,
    [ZeroFindingMethod.Heuristics]: this.findIndependentZerosWithHeuristics,
  };
  private reachedRows: Array<number>;
  private targetColumns: Array<number>;
  private verifiedLines: TableLineSelections;
  private columnToRowMarks: ColumnToRowMarks;

  public calculate(reducedAssignmentTable: Table, zeroFindingMethod: ZeroFindingMethod): KoenigAlgoResponse {
    const N = reducedAssignmentTable.length;
    const selectedIndependentZeros = this.findIndependentZeros[zeroFindingMethod](reducedAssignmentTable);
    if (selectedIndependentZeros.length === N) return [{selectedIndependentZeros}];

    const process: KoenigAlgoResponse = [];
    this.setInitialAuxiliaryParameters();
    this.setStarterReachedRowsAndTargets(N, selectedIndependentZeros);

    while (!isEmpty(this.reachedRows)) {
      this.snapshotAProcessStep(process, selectedIndependentZeros);
      const hasWayToColumn = this.findWaysToColumns(reducedAssignmentTable, selectedIndependentZeros);
      if (!hasWayToColumn) {
        const strikeThroughs = this.getStrikeThroughs(N);
        process.push({selectedIndependentZeros, strikeThroughs});
        return process;
      }
      const markWithTarget = this.getMarkWithTarget();
      if (markWithTarget !== undefined) {
        this.searchBack(selectedIndependentZeros, markWithTarget);
        this.setInitialAuxiliaryParameters();
        this.setStarterReachedRowsAndTargets(N, selectedIndependentZeros);
        continue;
      }
      this.findWaysToRows(selectedIndependentZeros);
    }

    process.push({selectedIndependentZeros});
    return process;
  }

  private snapshotAProcessStep(process: KoenigAlgoResponse, selectedIndependentZeros: Array<SelectedCell>): void {
    const {reachedRows, targetColumns, verifiedLines, columnToRowMarks} = this;
    const stepSnapshot: KoenigAlgoStep = cloneDeep({
      selectedIndependentZeros,
      reachedRows,
      targetColumns,
      verifiedLines,
      columnToRowMarks,
    });
    process.push(stepSnapshot);
  }

  private setInitialAuxiliaryParameters(): void {
    this.reachedRows = [];
    this.targetColumns = [];
    this.verifiedLines = {rows: [], columns: []};
    this.columnToRowMarks = {};
  }

  private getMarkWithTarget(): number | undefined {
    return this.targetColumns.find((target) => {
      const marks = keys(this.columnToRowMarks);
      return marks.some((mark) => +mark === target);
    });
  }

  private getStrikeThroughs(n: number): TableLineSelections {
    const strikeThroughs: TableLineSelections = {rows: [], columns: []};
    for (let index = 0; index < n; index++) {
      if (!this.verifiedLines.rows.some((rowIndex) => rowIndex === index)) strikeThroughs.rows.push(index);
      if (this.verifiedLines.columns.some((columnIndex) => columnIndex === index)) strikeThroughs.columns.push(index);
    }
    return strikeThroughs;
  }

  private searchBack(independentZeros: Array<SelectedCell>, reachedTargetColumn: number): void {
    let rowIndex = this.columnToRowMarks[reachedTargetColumn];
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
      rowIndex = this.columnToRowMarks[columnIndex];
    } while (hasIndieZeroInRow);
  }

  private findWaysToRows(independentZeros: Array<SelectedCell>): void {
    const unverifiedColumns = keys(this.columnToRowMarks).filter(
      (mark) => !this.verifiedLines.columns.some((index) => index === +mark),
    );
    const switchingPoints = independentZeros.filter((cell) =>
      unverifiedColumns.some((columnIndex) => +columnIndex === cell.x),
    );
    for (const switchingPoint of switchingPoints) {
      this.reachedRows.push(switchingPoint.y);
      this.verifiedLines.columns.push(switchingPoint.x);
    }
  }

  private findWaysToColumns(table: Table, independentZeros: Array<SelectedCell>): boolean {
    let hasFoundWays = false;
    for (const reachedRow of this.reachedRows) {
      const row = table[reachedRow];
      const zeroCells = pickBy(row, (cell) => cell === 0);
      const zeroColumns = keys(zeroCells).filter(
        (zeroColumn) =>
          !this.isCellIndependent(independentZeros, reachedRow, +zeroColumn) &&
          !keys(this.columnToRowMarks).some((index) => index === zeroColumn),
      );
      for (const zeroColumn of zeroColumns) {
        this.columnToRowMarks[+zeroColumn] = reachedRow;
        hasFoundWays = true;
      }
      this.verifiedLines.rows.push(reachedRow);
    }
    this.reachedRows = [];
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
      nextIndependentZeros = KoenigAlgorithmService.getIndependentZeroHeuristically(table, independentZeros);
      if (nextIndependentZeros) independentZeros.push(nextIndependentZeros);
    } while (nextIndependentZeros !== null);
    return independentZeros;
  }

  private static getIndependentZeroHeuristically(
    table: Table,
    independentZeros: Array<SelectedCell>,
  ): SelectedCell | null {
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

  private setStarterReachedRowsAndTargets(n: number, selectedIndependentZeros: Array<SelectedCell>): void {
    for (let index = 0; index < n; index++) {
      const isTargetColumn = !selectedIndependentZeros.some((selectedZero) => selectedZero.x === index);
      const isReachedRow = !selectedIndependentZeros.some((selectedZero) => selectedZero.y === index);
      if (isTargetColumn) this.targetColumns.push(index);
      if (isReachedRow) this.reachedRows.push(index);
    }
  }
}
