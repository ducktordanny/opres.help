import {TPData} from '@opres/shared-interfaces';
import {sum} from '@shared/helpers/array.helper';

/* Checks if the given base table is solvable. */
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
  return shopDemandSum === storageStockSum;
}
