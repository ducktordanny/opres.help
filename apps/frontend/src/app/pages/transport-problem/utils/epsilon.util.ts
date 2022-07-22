import {TransportTable} from '../transport-problem.types';

/* Calculates the epsilon value of the given table. */
export function getEpsilon(resultTable: TransportTable): number {
  let epsilon = 0;

  for (const [rowIndex, row] of resultTable.entries())
    for (const [columnIndex] of Object.entries(row))
      epsilon +=
        (resultTable[rowIndex][columnIndex].cost || 0) *
        (resultTable[rowIndex][columnIndex].transported || 0);

  return epsilon;
}
