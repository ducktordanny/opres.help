import {ProblemTable} from './table.type';

export interface TspTreeData {
  id: string;
  parentId: string | null;
  displayId: number;
  cost?: number;
  townId?: number;
}

export interface PathFindingStep {
  tree: Array<TspTreeData>;
  path: Array<number>;
  cost: number;
}

export interface BnbSteps {
  [step: number]: Array<PathFindingStep>;
}

export interface BnbBestPath {
  path: Array<number>;
  cost: number;
}

export interface BnbResult {
  reducedTable: ProblemTable;
  steps: BnbSteps;
  result: BnbBestPath;
}
