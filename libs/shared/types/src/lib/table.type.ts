export type ProblemRow = Record<string, number | null>;
export type ProblemTable = Array<ProblemRow>;
export type RowDefs = Array<string>;
export type SideTableType = 'row' | 'column';
export type SideTableValuesByIndex = Record<string | number, string | number | null>;
export type SideTable = Array<SideTableValuesByIndex>;
