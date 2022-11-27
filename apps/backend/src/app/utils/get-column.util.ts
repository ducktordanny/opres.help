import {Cell, Table, TransportTable} from '@opres/shared/types';

export function getColumnUtil(
  table: TransportTable | Table,
  columnIndex: number,
): Array<Cell | number | null> {
  return table.map((row) => row[columnIndex]);
}
