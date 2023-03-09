import {Injectable} from '@nestjs/common';

import {ProblemRow, ProblemTable} from '@opres/shared/types';
import {forEach, last} from 'lodash';

interface MinimumCost {
  index: number;
  value?: number;
}

@Injectable()
export class BnbService {
  private usedFirstDestinations: Array<number> = [];
  private upperLimit: number = null;
  private path: Array<number> = [];

  public calculate(tspTable: ProblemTable) {
    // * should iterate until the upper limit could not be reduced
    this.getPath(tspTable);
    return {message: 'test'};
  }

  private getPath(table: ProblemTable): void {
    let cost = 0;
    let nextDestination: MinimumCost | undefined = {index: 0};
    this.usedFirstDestinations = [0];

    do {
      nextDestination = this.getMinimumCostOfRow(table[nextDestination.index]);
      cost += nextDestination?.value ?? table[last(this.usedFirstDestinations)][0];
      this.usedFirstDestinations.push(nextDestination?.index ?? 0);
    } while (nextDestination !== undefined);

    this.upperLimit = cost;
    console.log('cost', cost);
    console.log('table', table);
    console.log('usedFirstDestinations', this.usedFirstDestinations);
  }

  private getMinimumCostOfRow(row: ProblemRow): MinimumCost | undefined {
    let value = Infinity;
    let index: number;
    forEach(row, (cell, cellIndex) => {
      if (cell === null) return;
      if (this.usedFirstDestinations.some((dest) => dest === +cellIndex)) return;
      if (cell < value) {
        value = cell;
        index = +cellIndex;
      }
    });
    if (index === undefined) return;
    return {value, index};
  }
}
