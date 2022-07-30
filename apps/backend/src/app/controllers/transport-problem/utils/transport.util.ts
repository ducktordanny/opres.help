import {Demands, Stocks, TransportTable} from '@opres/shared/types';

export function transport(
  resultTable: TransportTable,
  demands: Demands,
  stocks: Stocks,
  demandIndex: number,
  stockIndex: number,
): [number, number] {
  const currentStock = stocks[stockIndex] || 0;
  const currentDemand = demands[demandIndex] || 0;
  const transported =
    currentDemand < currentStock ? currentDemand : currentStock;

  resultTable[stockIndex][demandIndex].transported = transported;
  demands[demandIndex] = currentDemand - transported;
  stocks[stockIndex] = currentStock - transported;

  return [currentDemand, currentStock];
}
