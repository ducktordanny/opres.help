import {Injectable} from '@angular/core';

import {
  CalculationProcess,
  TPData,
  TransportTable,
} from '@opres/shared-interfaces';
import {Observable, ReplaySubject} from 'rxjs';

import {createResultTableFrom} from '../../utils/result-table.util';
import {transport} from '../../utils/transport.util';

@Injectable()
export class NorthWestMethodService {
  public calculate(
    transportProblemData: TPData,
  ): Observable<CalculationProcess> {
    const {costs} = transportProblemData;
    const stocks = [...transportProblemData.storageStocks];
    const demands = [...transportProblemData.shopDemands];

    const process = new ReplaySubject<CalculationProcess>();
    const resultTable: TransportTable = createResultTableFrom(costs);
    let stockIndex = 0,
      demandIndex = 0;

    while (stockIndex < stocks.length && demandIndex < demands.length) {
      const [currentDemand, currentStock] = transport(
        resultTable,
        demands,
        stocks,
        demandIndex,
        stockIndex,
      );

      if (currentDemand < currentStock) demandIndex++;
      else stockIndex++;

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
}
