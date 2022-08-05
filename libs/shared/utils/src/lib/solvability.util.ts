import {Table} from '@opres/shared/types';
import {TPData, TransportTable} from '@opres/shared/types';

import {sum} from './array.util';

/** Deeply checks the types of the transport table. */
export function isTransportTableValid(transportTable: TransportTable): boolean {
  for (const transportRow of transportTable) {
    const arrayOfTransportRow = Object.values(transportRow);
    for (const cellObject of arrayOfTransportRow) {
      const {cost, transported} = cellObject;
      if (typeof cost !== 'number') return false;
      if (transported && typeof transported !== 'number') return false;
    }
  }
  return true;
}

/** Deeply checks the types of the table.  */
export function isTableValid(table: Table): boolean {
  for (const row of table) {
    const arrayOfRow = Object.values(row);
    for (const cell of arrayOfRow) if (typeof cell !== 'number') return false;
  }
  return true;
}

/** Checks if the given transportation data is solvable and its types are valid. */
export function checkSolvability(transportProblemData: TPData): boolean {
  const {costs, shopDemands, storageStocks} = transportProblemData;
  if (
    costs.length === 0 ||
    shopDemands.length === 0 ||
    storageStocks.length === 0
  )
    return false;
  const shopDemandSum = sum(shopDemands);
  const storageStockSum = sum(storageStocks);
  return shopDemandSum === storageStockSum && isTableValid(costs);
}
