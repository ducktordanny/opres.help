import {TransportTable} from '@opres/shared/types';
import {countBy} from 'lodash';

import {getColumnUtil} from './get-column.util';

export function getBaseCellsInARow(
  transportTable: TransportTable,
  rowIndex: number,
): number {
  return countBy(
    transportTable[rowIndex],
    (cell) => cell.transported !== undefined,
  ).true;
}

export function getBaseCellsInColumn(
  transportTable: TransportTable,
  columnIndex: number,
): number {
  const column = getColumnUtil(transportTable, columnIndex);
  return countBy(column, (cell) => cell.transported !== undefined).true;
}
