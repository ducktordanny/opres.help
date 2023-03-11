import {Injectable} from '@nestjs/common';

import {ProblemRow, ProblemTable} from '@opres/shared/types';
import {cloneDeep, forEach, last} from 'lodash';

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
    // * should iterate until the upper limit could not be reduced
    // * always should check if the first row has a smaller cost than the upper limit (or should it be the first row?)
    this.getPath(tspTable);
    return {message: 'test'};
  }

  private getPath(table: ProblemTable): void {
    let cost = 0;
    let nextDestination: MinimumCost | undefined = {index: 0};
    this.usedFirstDestinations.push(0);

    do {
      const row = table[nextDestination.index];
      nextDestination = this.getMinimumCostOfRow(row);
      this.usedFirstDestinations.push(nextDestination?.index ?? 0);
      this.extendLowerEstimates(row, cost);
      cost += nextDestination?.value ?? table[last(this.usedFirstDestinations)][0];
    } while (nextDestination !== undefined);

    this.currentBestPath = cloneDeep(this.usedFirstDestinations);
    this.upperLimit = cost;
    this.usedFirstDestinations = [];
    console.log('cost', cost);
    console.log('table', table);
    console.log('currentBestPath', this.currentBestPath);
    console.log('lowerEstimates', this.lowerEstimates);
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
