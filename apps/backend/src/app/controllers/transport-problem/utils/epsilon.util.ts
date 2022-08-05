import {Epsilon, TransportTable} from '@opres/shared/types';

export function getEpsilon(
  transportTable: TransportTable,
  explanation: boolean,
): Epsilon {
  let epsilon = 0;

  for (const [rowIndex, row] of transportTable.entries())
    for (const [columnIndex] of Object.entries(row))
      epsilon +=
        (transportTable[rowIndex][columnIndex].cost || 0) *
        (transportTable[rowIndex][columnIndex].transported || 0);

  return {value: epsilon};
}
