import {Injectable} from '@nestjs/common';

import {ProblemRow, ProblemTable} from '@opres/shared/types';
import {BnbResult, BnbSteps, PathFindingStep} from '@opres/shared/types';
import {cloneDeep, forEach, isEqual, last, minBy, remove, size} from 'lodash';

import {TspTreeBuilder} from './tsp-tree-builder';

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
  private tree = new TspTreeBuilder(0);

  public calculate(tspTable: ProblemTable): BnbResult {
    const steps: BnbSteps = {};
    let smallestLowerEstimates: LowerEstimate;

    do {
      const stepIndex = size(steps);
      steps[stepIndex] = this.getPath(tspTable, smallestLowerEstimates);
      smallestLowerEstimates = this.getSmallestLowerEstimate();
    } while (smallestLowerEstimates?.cost < this.upperLimit);

    return {
      steps,
      result: {
        cost: this.upperLimit,
        path: this.currentBestPath,
      },
    };
  }

  private getSmallestLowerEstimate(): LowerEstimate | undefined {
    const smallestLowerEstimate = cloneDeep(minBy(this.lowerEstimates, (est) => est.cost));
    remove(this.lowerEstimates, (est) => isEqual(est, smallestLowerEstimate));
    return smallestLowerEstimate;
  }

  private getPath(table: ProblemTable, lowerEstimate?: LowerEstimate): Array<PathFindingStep> {
    const pathFindingSteps: Array<PathFindingStep> = [];
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
      this.extendTree(this.usedFirstDestinations, cost);
      this.logPathFindingStep(pathFindingSteps, cost);
    } while (nextDestination !== undefined);

    if (this.upperLimit !== null && this.upperLimit < cost) return pathFindingSteps;
    this.currentBestPath = cloneDeep(this.usedFirstDestinations);
    this.upperLimit = cost;
    return pathFindingSteps;
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
      const cost = currentCost + cell;
      this.extendTree(path, cost);
      this.lowerEstimates.push({
        path: path,
        cost,
      });
    });
  }

  private extendTree(path: Array<number>, cost: number): void {
    const townId = last(path);
    const parentId = cloneDeep(path).slice(0, -1).join('');
    this.tree.addNode(parentId, townId, cost);
  }

  private logPathFindingStep(steps: Array<PathFindingStep>, cost: number): void {
    steps.push({
      tree: this.tree.getCurrentTree(),
      path: cloneDeep(this.usedFirstDestinations),
      cost,
    });
  }
}
