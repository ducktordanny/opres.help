import {Injectable} from '@nestjs/common';

import {SelectedCell, Table} from '@opres/shared/types';
import {forEach, isEmpty, keys, pickBy, remove} from 'lodash';

import {getColumnUtil} from '../../../utils/get-column.util';

export enum ZeroFindingMethod {
  Heuristics = 'heuristics',
  Greedy = 'greedy',
}

interface Verified {
  rows: Array<number>;
  columns: Array<number>;
}

interface RowToColumnMarks {
  [columnIndex: number]: Array<number>;
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

  public calculate(reducedAssignmentTable: Table, zeroFindingMethod: ZeroFindingMethod): Array<SelectedCell> {
    const selectedIndependentZeros = this.findIndependentZeros[zeroFindingMethod](reducedAssignmentTable);
    console.log('selectedIndependentZeros', selectedIndependentZeros);
    if (selectedIndependentZeros.length === reducedAssignmentTable.length) return selectedIndependentZeros;

    const reachedRows: Array<number> = [];
    const targetColumns: Array<number> = [];
    this.fillInitialPoints(reducedAssignmentTable.length, selectedIndependentZeros, reachedRows, targetColumns);
    console.log('reachedRows', reachedRows);
    console.log('targetColumns', targetColumns);

    const verifiedLines: Verified = {rows: [], columns: []};
    const rowToColumnMarks: RowToColumnMarks = {};

    while (!isEmpty(reachedRows)) {
      const hasWayToColumn = this.findWaysToColumns(
        reducedAssignmentTable,
        selectedIndependentZeros, // ? maybe I should consider moving some main variables out
        reachedRows,
        verifiedLines,
        rowToColumnMarks,
      );
      console.log('rowToColumnMarks', rowToColumnMarks);
      if (!hasWayToColumn) {
        console.log('Should apply strikethrough.'); // todo
        break;
      }
      if (this.haveMarksOnAllTargets(rowToColumnMarks, targetColumns)) {
        console.log('Should search back. And restart loop.'); // todo
        break;
      }
      this.findWaysToRows(selectedIndependentZeros, reachedRows, verifiedLines, rowToColumnMarks);
      console.log('reachedRows end', reachedRows);
      console.log('verifiedLines', verifiedLines);
    }

    return [];
  }

  private haveMarksOnAllTargets(rowToColumnMarks: RowToColumnMarks, targetColumns: Array<number>): boolean {
    return targetColumns.every((target) => {
      const marks = keys(rowToColumnMarks);
      return marks.some((mark) => +mark === target);
    });
  }

  private findWaysToRows(
    independentZeros: Array<SelectedCell>,
    reachedRows: Array<number>,
    verifiedLines: Verified,
    rowToColumnMarks: RowToColumnMarks,
  ): void {
    const unverifiedColumns = keys(rowToColumnMarks).filter(
      (mark) => !verifiedLines.columns.some((index) => index === +mark),
    );
    console.log('unverifiedColumns', unverifiedColumns);
    const switchingPoints = independentZeros.filter((cell) =>
      unverifiedColumns.some((columnIndex) => +columnIndex === cell.x),
    );
    console.log('switchingPoints', switchingPoints);
    for (const switchingPoint of switchingPoints) {
      reachedRows.push(switchingPoint.y);
      verifiedLines.columns.push(switchingPoint.x);
    }
  }

  private findWaysToColumns(
    table: Table,
    independentZeros: Array<SelectedCell>,
    reachedRows: Array<number>,
    verifiedLines: Verified,
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
        if (!rowToColumnMarks[+zeroColumn]) rowToColumnMarks[+zeroColumn] = [];
        rowToColumnMarks[+zeroColumn].push(reachedRow);
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
