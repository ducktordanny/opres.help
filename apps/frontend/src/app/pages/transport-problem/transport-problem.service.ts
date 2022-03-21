import {Injectable} from '@angular/core';

import {sum} from '@shared/helpers/array.helper';
import {createRowFrom, rowDefinitionsFrom} from '@shared/helpers/table.helper';
import {Table} from '@shared/types/table.types';
import {BehaviorSubject} from 'rxjs';

export type Stocks = Array<number | null>;
export type Demands = Array<number | null>;
export type TPMethods = 'north-west' | 'table-min' | 'vogel-korda';

/** Stands for transportation problem data what contains the costs, the demand of shops and the stock of storages. */
export interface TPData {
  costs: Table;
  shopDemands: Demands;
  storageStocks: Stocks;
}

export interface Result {
  epsilon: number;
  table: Table;
}

@Injectable()
export class TransportProblemService {
  /** A shop is the equivalent of a column. */
  public shops$ = new BehaviorSubject<number>(4);
  /** A storage is the equivalent of a row. */
  public storages$ = new BehaviorSubject<number>(4);
  public method$ = new BehaviorSubject<TPMethods>('north-west');
  /** It contains all table data what are necessary for calculations (costs, demands, stocks). */
  private tpData$ = new BehaviorSubject<TPData>({
    costs: [],
    shopDemands: [],
    storageStocks: [],
  });

  public setCosts(costs: Table): void {
    this.tpData$.next({...this.tpData$.getValue(), costs});
  }

  public setShopDemands(shopDemands: Demands): void {
    this.tpData$.next({...this.tpData$.getValue(), shopDemands});
  }

  public setStorageStocks(storageStocks: Stocks): void {
    this.tpData$.next({...this.tpData$.getValue(), storageStocks});
  }

  public calculate(): void {
    if (!this.checkSolvability())
      throw new Error('The given problem is not solvable!');

    // select method
    const method = this.method$.getValue();
    if (method === 'north-west') console.log(this.northWest());
    else if (method === 'table-min') return;
    else if (method === 'vogel-korda') return;
  }

  private getEpsilon(resultTable: Table): number {
    const {costs} = this.tpData$.getValue();
    let epsilon = 0;

    for (const [rowIndex, row] of costs.entries()) {
      for (const [columnIndex, cost] of Object.entries(row)) {
        epsilon += (cost || 0) * (resultTable[rowIndex][columnIndex] || 0);
      }
    }

    return epsilon;
  }

  private northWest(): Result {
    const {shopDemands: demands, storageStocks: stocks} =
      this.tpData$.getValue();
    const resultTable: Table = [this.createNewResultRow(demands.length)];
    let stockIndex = 0,
      demandIndex = 0;

    while (stockIndex < stocks.length && demandIndex < demands.length) {
      const currentStock = stocks[stockIndex] || 0,
        currentDemand = demands[demandIndex] || 0;
      const transported =
        currentDemand < currentStock ? currentDemand : currentStock;

      resultTable[stockIndex][demandIndex] = transported;
      demands[demandIndex] = currentDemand - transported;
      stocks[stockIndex] = currentStock - transported;

      if (currentDemand < currentStock) demandIndex++;
      else {
        stockIndex++;
        if (stockIndex < stocks.length)
          resultTable.push(this.createNewResultRow(demands.length));
      }
    }

    return {
      epsilon: this.getEpsilon(resultTable),
      table: resultTable,
    };
  }

  private createNewResultRow = (length: number) => ({
    ...createRowFrom(rowDefinitionsFrom(length)),
  });

  private checkSolvability(): boolean {
    const {shopDemands, storageStocks} = this.tpData$.getValue();
    const shopDemandSum = sum(shopDemands);
    const storageStockSum = sum(storageStocks);
    return shopDemandSum === storageStockSum;
  }
}
