import {Inject, Injectable, Optional} from '@angular/core';

export type Storage = Array<number>;
export type Shop = Array<number>;
export type CostTable = Array<Array<number>>;

@Injectable()
export class TransportProblemService {
  private storages: Storage;
  private shops: Shop;
  private costs: CostTable;
  private isInitialized = false;

  constructor(
    @Inject('storageSize') @Optional() storageSize = 4,
    @Inject('shopSize') @Optional() shopSize = 4,
  ) {
    this.storages = Array.from({length: storageSize});
    this.shops = Array.from({length: shopSize});
    this.costs = Array.from({length: storageSize});
    this.costs = this.costs.map(() => {
      return Array.from({length: shopSize});
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
    for (const storageStock of this.storages) stock += storageStock;
    for (const shopDemand of this.shops) demand += shopDemand;
    return stock === demand;
  }

  getResultTable(): CostTable {
    const result: CostTable = [];
    for (let i = 0; i < this.storages.length; i++) {
      result.push(Array.from({length: this.shops.length}));
    }
    return result;
  }

  calculateEpsilon(resultTable: CostTable): number {
    let epsilon = 0;
    for (const [i, row] of this.costs.entries())
      for (const [j, cost] of row.entries())
        epsilon += cost * (resultTable[i][j] || 0);
    return epsilon;
  }

  getMinimumCost(array: any[][]): {row: number; column: number} {
    let minimumCost = 0;
    const indexes = {
      row: -1,
      column: -1,
    };

    for (const [i, row] of array.entries()) {
      for (const [j, element] of row.entries()) {
        if (element < minimumCost) {
          minimumCost = element;
          indexes.row = i;
          indexes.column = j;
        }
      }
    }

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
    const {storages, shops} = this;
    const result = this.getResultTable();

    let row = 0,
      column = 0;

    while (row < storages.length && column < shops.length) {
      const stock = storages[row],
        demand = shops[column];
      const transport = stock > demand ? demand : stock;

      result[row][column] = transport;
      storages[row] -= transport;
      shops[column] -= transport;

      if (transport == stock) row += 1;
      else column += 1;
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
