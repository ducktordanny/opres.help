import {Injectable} from '@angular/core';

import {Table} from '@opres/generatable-tables';
import {
  CalculationProcess,
  Demands,
  Stocks,
  TPData,
  TransportTable,
} from '@opres/shared-interfaces';
import {Observable, ReplaySubject} from 'rxjs';

import {createResultTableFrom} from '../../utils/result-table.util';
import {transport} from '../../utils/transport.util';

interface SelectedCost {
  demandIndex: number;
  stockIndex: number;
}

@Injectable()
export class TableMinimumMethodService {
  public calculate(
    transportProblemData: TPData,
  ): Observable<CalculationProcess> {
    const {costs} = transportProblemData;
    const stocks = [...transportProblemData.storageStocks];
    const demands = [...transportProblemData.shopDemands];

    const process = new ReplaySubject<CalculationProcess>();
    const resultTable: TransportTable = createResultTableFrom(costs);

    while (this.hasAvailableProducts(demands, stocks)) {
      const {demandIndex, stockIndex} = this.getCurrentMinimumCost(
        costs,
        demands,
        stocks,
      );
      transport(resultTable, demands, stocks, demandIndex, stockIndex);

      process.next({
        transportation: JSON.parse(
          JSON.stringify(resultTable),
        ) as TransportTable,
        demands: [...demands],
        stocks: [...stocks],
      });
    }

    return process.asObservable();
  }

  private hasAvailableProducts(demands: Demands, stocks: Stocks): boolean {
    return (
      demands.some((unit) => unit !== null && unit > 0) &&
      stocks.some((unit) => unit !== null && unit > 0)
    );
  }

  /* Here it's important to get the actual demands and stocks in order to get a valid response. */
  private getCurrentMinimumCost(
    costs: Table,
    demands: Demands,
    stocks: Stocks,
  ): SelectedCost {
    let minCost: number | null = null;
    let demandIndex: number | null = null;
    let stockIndex: number | null = null;

    for (const [rowIndex, rows] of costs.entries()) {
      if ([0, null].includes(stocks[rowIndex])) continue;
      const rowArray = Object.values(rows);

      for (const [columnIndex, cost] of rowArray.entries()) {
        if ([0, null].includes(demands[columnIndex]) || !cost) continue;
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
