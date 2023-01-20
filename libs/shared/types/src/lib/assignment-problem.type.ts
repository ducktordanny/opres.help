import {SelectedCell} from './problems.type';

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

export interface ColumnToRowMarks {
  [columnIndex: number]: number;
}
