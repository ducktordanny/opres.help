import {TransportTable} from '@opres/shared/types';
import {countBy} from 'lodash';

import {getColumnUtil} from '../../../utils/get-column.util';

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
  return countBy(
    column,
    (cell) => typeof cell !== 'number' && cell?.transported !== undefined,
  ).true;
}
