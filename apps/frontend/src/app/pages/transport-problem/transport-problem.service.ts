import {Injectable} from '@angular/core';

import {sum} from '@shared/helpers/array.helper';
import {Row, Table} from '@shared/types/table.types';
import {BehaviorSubject} from 'rxjs';

import {
  EMPTY_CALCULATION_PROCESS,
  EMPTY_TP_DATA,
} from './transport-problem.constant';
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
  private calculationProcess$ = new BehaviorSubject<CalculationProcess>(
    EMPTY_CALCULATION_PROCESS,
  );
  /** It contains all table data what are necessary for calculations (costs, demands, stocks). */
  private tpData$ = new BehaviorSubject<TPData>(EMPTY_TP_DATA);

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

  public clear(): void {
    this.tpData$.next(EMPTY_TP_DATA);
  }

  public reset(): void {
    this.calculationProcess$.next(EMPTY_CALCULATION_PROCESS);
  }

  public northWest(transportProblemData?: TPData): Result {
    const tpData = transportProblemData || this.tpData$.getValue();
    if (!this.checkSolvability(tpData))
      throw new Error('The given problem is not solvable! Try another one.');
    const {costs} = tpData;
    const stocks = [...tpData.storageStocks];
    const demands = [...tpData.shopDemands];
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

  public checkSolvability(transportProblemData: TPData): boolean {
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

  public getEpsilon(resultTable: TransportTable): number {
    let epsilon = 0;

    for (const [rowIndex, row] of resultTable.entries())
      for (const [columnIndex] of Object.entries(row))
        epsilon +=
          (resultTable[rowIndex][columnIndex].cost || 0) *
          (resultTable[rowIndex][columnIndex].transported || 0);

    return epsilon;
  }

  private createResultTableFrom(costTable: Table): TransportTable {
    return costTable.map((row: Row) => this.createNewResultRow(row));
  }

  private createNewResultRow = (costRow: Row): TransportRow =>
    Object.keys(costRow).reduce((result: TransportRow, key) => {
      result[key] = {cost: costRow[key]};
      return result;
    }, {});
}
