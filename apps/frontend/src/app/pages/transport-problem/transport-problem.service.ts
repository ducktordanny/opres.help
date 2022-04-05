import {Injectable} from '@angular/core';

import {sum} from '@shared/helpers/array.helper';
import {Row, Table} from '@shared/types/table.types';
import {BehaviorSubject} from 'rxjs';

import {
  CalculationProcess,
  Demands,
  Result,
  Stocks,
  TPData,
  TPMethods,
  TransportRow,
  TransportTable,
} from './transport-problem.types';

@Injectable()
export class TransportProblemService {
  /** A shop is the equivalent of a column. */
  public shops$ = new BehaviorSubject<number>(4);
  /** A storage is the equivalent of a row. */
  public storages$ = new BehaviorSubject<number>(4);
  public method$ = new BehaviorSubject<TPMethods>('north-west');
  private calculationProcess$ = new BehaviorSubject<CalculationProcess>({
    transportation: [],
    demands: [],
    stocks: [],
  });
  /** It contains all table data what are necessary for calculations (costs, demands, stocks). */
  private tpData$ = new BehaviorSubject<TPData>({
    costs: [],
    shopDemands: [],
    storageStocks: [],
  });

  public get calculationProcess() {
    return this.calculationProcess$.asObservable();
  }

  public setCosts(costs: Table): void {
    this.tpData$.next({...this.tpData$.getValue(), costs});
  }

  public setShopDemands(shopDemands: Demands): void {
    this.tpData$.next({...this.tpData$.getValue(), shopDemands});
  }

  public setStorageStocks(storageStocks: Stocks): void {
    this.tpData$.next({...this.tpData$.getValue(), storageStocks});
  }

  public calculate(): Result {
    if (!this.checkSolvability())
      throw new Error('The given problem is not solvable!');
    const mockResult = {epsilon: 0, table: []};

    // select method
    const method = this.method$.getValue();
    if (method === 'north-west') return this.northWest();
    else if (method === 'table-min') return mockResult;
    else if (method === 'vogel-korda') return mockResult;
    return mockResult;
  }

  private getEpsilon(resultTable: TransportTable): number {
    const {costs} = this.tpData$.getValue();
    let epsilon = 0;

    for (const [rowIndex, row] of costs.entries())
      for (const [columnIndex, cost] of Object.entries(row))
        epsilon +=
          (cost || 0) * (resultTable[rowIndex][columnIndex].transported || 0);

    return epsilon;
  }

  private northWest(): Result {
    const {
      costs,
      shopDemands: demands,
      storageStocks: stocks,
    } = this.tpData$.getValue();
    const resultTable: TransportTable = this.createResultTableFrom(costs);
    let stockIndex = 0,
      demandIndex = 0;

    while (stockIndex < stocks.length && demandIndex < demands.length) {
      const currentStock = stocks[stockIndex] || 0,
        currentDemand = demands[demandIndex] || 0;
      const transported =
        currentDemand < currentStock ? currentDemand : currentStock;

      resultTable[stockIndex][demandIndex].transported = transported;
      demands[demandIndex] = currentDemand - transported;
      stocks[stockIndex] = currentStock - transported;

      if (currentDemand < currentStock) demandIndex++;
      else {
        stockIndex++;
      }

      this.calculationProcess$.next({
        transportation: JSON.parse(
          JSON.stringify(resultTable),
        ) as TransportTable,
        demands: [...demands],
        stocks: [...stocks],
      });
    }

    return {
      epsilon: this.getEpsilon(resultTable),
      table: resultTable,
    };
  }

  private createResultTableFrom(costTable: Table): TransportTable {
    return costTable.map((row: Row) => this.createNewResultRow(row));
  }

  private createNewResultRow = (costRow: Row): TransportRow =>
    Object.keys(costRow).reduce((result: TransportRow, key) => {
      result[key] = {cost: costRow[key]};
      return result;
    }, {});

  private checkSolvability(): boolean {
    const {shopDemands, storageStocks} = this.tpData$.getValue();
    const shopDemandSum = sum(shopDemands);
    const storageStockSum = sum(storageStocks);
    return shopDemandSum === storageStockSum;
  }
}
