import {Explanation, SelectedCell} from './problems.type';
import {ProblemTable} from './table.type';

export enum AssignmentProblemType {
  Max = 'maximum',
  Min = 'minimum',
}

export enum ZeroFindingMethod {
  Heuristics = 'heuristics',
  Greedy = 'greedy',
}

export interface ReduceResponse {
  maxToMinTransformation?: ProblemTable;
  negativeValuesTransformation?: ProblemTable;
  reduce: ProblemTable;
}

export interface TableLineSelections {
  rows: Array<number>;
  columns: Array<number>;
}

export interface KoenigAlgoStep {
  selectedIndependentZeros: Array<SelectedCell>;
  reachedRows?: Array<number>;
  targetColumns?: Array<number>;
  columnToRowMarks?: ColumnToRowMarks;
  verifiedLines?: TableLineSelections;
  strikeThroughs?: TableLineSelections;
}

export type KoenigAlgoResponse = Array<KoenigAlgoStep>;

export interface HungarianMethodTransformation {
  outputTable: ProblemTable;
  epsilon: number;
  strikeThroughs: TableLineSelections;
  transformCells: Array<SelectedCell>;
}

export interface HungarianMethodStep {
  currentTable: ProblemTable;
  koenigAlgorithm?: KoenigAlgoResponse;
  transformation?: HungarianMethodTransformation;
  reduce?: ReduceResponse;
  explanation?: Explanation;
}

export type HungarianMethodResponse = Array<HungarianMethodStep>;

export interface ColumnToRowMarks {
  [columnIndex: number]: number;
}
