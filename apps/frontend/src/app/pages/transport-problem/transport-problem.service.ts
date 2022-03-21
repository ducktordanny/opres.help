import {Injectable} from '@angular/core';

import {sum} from '@shared/helpers/array.helper';
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

@Injectable()
export class TransportProblemService {
  /** A shop is the equivalent of a column. */
  public shops$ = new BehaviorSubject<number>(4);
  /** A storage is the equivalent of a row. */
  public storages$ = new BehaviorSubject<number>(4);

  public calculate(method: TPMethods, data: TPData): void {
    if (method === 'north-west') this.northWest(data);
  }

  private northWest(data: TPData): void {
    const {costs, shopDemands, storageStocks} = data;
    if (!this.canBeSolved(shopDemands, storageStocks))
      throw new Error('The given problem is not solvable!');
    console.log(costs);
  }

  private canBeSolved(shopDemands: Demands, storageStocks: Stocks): boolean {
    const shopDemandSum = sum(shopDemands);
    const storageStockSum = sum(storageStocks);
    return shopDemandSum === storageStockSum;
  }
}
