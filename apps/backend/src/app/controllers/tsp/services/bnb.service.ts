import {Injectable} from '@nestjs/common';

import {ProblemRow, ProblemTable} from '@opres/shared/types';
import {cloneDeep, forEach, last, minBy} from 'lodash';

interface MinimumCost {
  index: number;
  value?: number;
}

interface LowerEstimate {
  path: Array<number>;
  cost: number;
}

@Injectable()
export class BnbService {
  private usedFirstDestinations: Array<number> = [];
  private lowerEstimates: Array<LowerEstimate> = [];
  private currentBestPath: Array<number> = null;
  private upperLimit: number = null;

  public calculate(tspTable: ProblemTable) {
    let smallestLowerEstimates;
    do {
      smallestLowerEstimates = this.getSmallestLowerEstimate();
      this.getPath(tspTable, smallestLowerEstimates);
    } while (!smallestLowerEstimates || smallestLowerEstimates < this.upperLimit);
    return {
      bestPath: this.currentBestPath,
      cost: this.upperLimit,
    };
  }

  private getSmallestLowerEstimate(): LowerEstimate | undefined {
    const smallestLowerEstimate = minBy(this.lowerEstimates, (est) => est.cost);
    return cloneDeep(smallestLowerEstimate);
  }

  private getPath(table: ProblemTable, lowerEstimate?: LowerEstimate): void {
    const starterIndex = last(lowerEstimate?.path) ?? 0;
    let cost = lowerEstimate?.cost ?? 0;
    let nextDestination: MinimumCost | undefined = {index: starterIndex};
    this.usedFirstDestinations = lowerEstimate?.path ?? [0];

    do {
      const row = table[nextDestination.index];
      nextDestination = this.getMinimumCostOfRow(row);
      this.usedFirstDestinations.push(nextDestination?.index ?? 0);
      this.extendLowerEstimates(row, cost);
      const penultimateDestination = this.usedFirstDestinations.slice(-2)[0];
      cost += nextDestination?.value ?? table[penultimateDestination][0];
    } while (nextDestination !== undefined);

    if (this.upperLimit !== null && this.upperLimit < cost) return;
    this.currentBestPath = cloneDeep(this.usedFirstDestinations);
    this.upperLimit = cost;
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

  private extendLowerEstimates(row: ProblemRow, currentCost: number): void {
    forEach(row, (cell, cellIndex) => {
      if (cell === null) return;
      if (this.usedFirstDestinations.some((dest) => dest === +cellIndex)) return;
      const path = cloneDeep(this.usedFirstDestinations);
      path.pop();
      path.push(+cellIndex);
      this.lowerEstimates.push({
        path: path,
        cost: currentCost + cell,
      });
    });
  }
}
