import {Injectable, NotAcceptableException} from '@nestjs/common';

import {ProblemTable} from '@opres/shared/types';
import {
  CalculationMode,
  Demands,
  FirstPhaseStep,
  Stocks,
  TPData,
  TransportTable,
} from '@opres/shared/types';
import {cloneDeep} from 'lodash';

import {createResultTableFrom} from '../../utils/result-table.util';
import {canTransport, transport} from '../../utils/transport.util';

interface SelectedCost {
  demandIndex: number;
  stockIndex: number;
}

@Injectable()
export class TableMinimumMethodService {
  public calculate(transportProblemData: TPData, mode: CalculationMode): Array<FirstPhaseStep> {
    const {costs, shopDemands, storageStocks} = cloneDeep(transportProblemData);

    const process: Array<FirstPhaseStep> = [];
    const resultTable: TransportTable = createResultTableFrom(costs);

    let iterationCounter = 0;
    while (canTransport(shopDemands, storageStocks)) {
      const {demandIndex, stockIndex} = this.getCurrentMinimumCost(
        costs,
        shopDemands,
        storageStocks,
      );
      transport(resultTable, shopDemands, storageStocks, demandIndex, stockIndex);

      process.push({
        transportation: cloneDeep(resultTable) as TransportTable,
        demands: [...shopDemands],
        stocks: [...storageStocks],
      });

      iterationCounter++;
      if (iterationCounter > 30)
        throw new NotAcceptableException('Too many iterations during calculation. No result.');
    }

    return process;
  }

  /* Here it's important to get the actual demands and stocks in order to get a valid response. */
  private getCurrentMinimumCost(
    costs: ProblemTable,
    demands: Demands,
    stocks: Stocks,
  ): SelectedCost {
    let minCost: number | null = null;
    let demandIndex: number | null = null;
    let stockIndex: number | null = null;

    for (const [rowIndex, rows] of costs.entries()) {
      if (!stocks[rowIndex]) continue;
      const rowArray = Object.values(rows);

      for (const [columnIndex, cost] of rowArray.entries()) {
        if (!demands[columnIndex] || !cost) continue;
        if (minCost === null || cost < minCost) {
          minCost = cost;
          demandIndex = columnIndex;
          stockIndex = rowIndex;
        }
      }
    }

    if (demandIndex === null || stockIndex === null)
      throw new Error('Something went wrong during calculation');

    return {demandIndex, stockIndex};
  }
}
