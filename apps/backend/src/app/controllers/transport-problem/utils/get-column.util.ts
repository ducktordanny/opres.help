import {Cell, TransportTable} from '@opres/shared/types';

export function getColumnUtil(
  table: TransportTable,
  columnIndex: number,
): Array<Cell> {
  return table.map((row) => row[columnIndex]);
}
