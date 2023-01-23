import {Explanation, SelectedCell} from './problems.type';
import {Table} from './table.type';

export enum ZeroFindingMethod {
  Heuristics = 'heuristics',
  Greedy = 'greedy',
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

export interface HungarianMethodStep {
  koenigAlgorithm?: KoenigAlgoResponse;
  epsilon?: number;
  transformation?: Table;
  reduce?: Table;
  explanation?: Explanation;
}

export type HungarianMethodResponse = Array<HungarianMethodStep>;

export interface ColumnToRowMarks {
  [columnIndex: number]: number;
}
