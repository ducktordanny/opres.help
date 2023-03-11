export interface TreeData {
  id: string;
  parentId: string | null;
  displayId: number;
  cost?: number;
  townId?: number;
}

export interface PathFindingStep {
  tree: Array<TreeData>;
  path: Array<number>;
  cost: number;
}

export interface BnbSteps {
  [step: number]: Array<PathFindingStep>;
}

export interface BnbResult {
  steps: BnbSteps;
  result: {
    path: Array<number>;
    cost: number;
  };
}
