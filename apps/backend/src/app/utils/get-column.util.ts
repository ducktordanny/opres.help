import {Cell, ProblemTable, TransportTable} from '@opres/shared/types';

export function getColumnUtil(
  table: TransportTable | ProblemTable,
  columnIndex: number,
): Array<Cell | number | null> {
  return table.map((row) => row[columnIndex]);
}
