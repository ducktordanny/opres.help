import {Inject, Injectable, Optional} from '@angular/core';

export type Storage = Array<number>;
export type Shop = Array<number>;
export type CostTable = Array<Array<number>>;

@Injectable({
  providedIn: 'root',
})
export class TransportTableService {
  private storages: Storage;
  private shops: Shop;
  private costs: CostTable;
  private isInitialized = false;

  constructor(
    @Inject('storageSize') @Optional() storageSize: number = 4,
    @Inject('shopSize') @Optional() shopSize: number = 4,
  ) {
    this.storages = new Array(storageSize);
    this.shops = new Array(shopSize);
    this.costs = new Array(storageSize);
    this.costs = this.costs.map(() => {
      return new Array(shopSize);
    });
  }

  /** This is required before any other function call. */
  fill(storages: number[], shops: number[], costs: number[][]): void {
    this.isInitialized = true;
    this.storages = storages;
    this.shops = shops;
    this.costs = costs;
  }

  isFilled(): boolean {
    return this.isInitialized;
  }

  log(): void {
    console.log(`Storages: ${this.storages}`);
    console.log(`Shops: ${this.shops}`);
    console.table(this.costs);
  }

  private verifySolvability(): boolean {
    let stock = 0,
      demand = 0;
    this.storages.forEach((storageStock) => (stock += storageStock));
    this.shops.forEach((shopDemand) => (demand += shopDemand));
    return stock === demand;
  }

  getResultTable(): CostTable {
    const result: CostTable = [];
    for (let i = 0; i < this.storages.length; i++) {
      result.push(new Array(this.shops.length));
    }
    return result;
  }

  calculateEpsilon(resultTable: CostTable): number {
    let epsilon = 0;
    this.costs.forEach((row, i) => {
      row.forEach((cost, j) => {
        epsilon += cost * (resultTable[i][j] || 0);
      });
    });
    return epsilon;
  }

  getMinimumCost(array: any[][]): {row: number; column: number} {
    let minimumCost = 0;
    const indexes = {
      row: -1,
      column: -1,
    };

    array.forEach((row, i) => {
      row.forEach((element, j) => {
        if (element < minimumCost) {
          minimumCost = element;
          indexes.row = i;
          indexes.column = j;
        }
      });
    });

    return indexes;
  }

  // ####################
  // ###### First Phase ######
  // ####################

  /** always starts from northwest */
  northWest(): {table: CostTable; epsilon: number} {
    if (!this.verifySolvability())
      throw new Error('The stock quantity is not equal to the demand.');

    // TODO: we shouldn't change the original values...
    let {storages, shops} = this;
    const result = this.getResultTable();

    let i = 0,
      j = 0;

    while (i < storages.length && j < shops.length) {
      const stock = storages[i],
        demand = shops[j];
      const transport = stock > demand ? demand : stock;

      result[i][j] = transport;
      storages[i] -= transport;
      shops[j] -= transport;

      if (transport == stock) {
        i += 1;
      } else {
        j += 1;
      }
    }

    return {
      table: result,
      epsilon: this.calculateEpsilon(result),
    };
  }

  /** always starts with the smallest cost */
  tableMin(): void {
    if (!this.verifySolvability())
      throw new Error('The stock quantity is not equal to the demand.');

    // TODO: we have to find one of the smallest cost in the costs table
    // TODO: find out a stop condition for iteration
  }

  vogelKorda(): void {
    if (!this.verifySolvability())
      throw new Error('The stock quantity is not equal to the demand.');
  }
}
