import {Table} from './table.type';

export type Stocks = Array<number | null>;
export type Demands = Array<number | null>;
export type TPMethods = 'north-west' | 'table-min' | 'vogel-korda';

/** Stands for transportation problem data what contains the costs, the demand of shops and the stock of storages. */
export interface TPData {
  costs: Table;
  shopDemands: Demands;
  storageStocks: Stocks;
}

export interface Cell {
  cost: number;
  transported?: number;
  potential?: number;
}

export type TransportRow = Record<string, Cell>;
export type TransportTable = Array<TransportRow>;

export interface AuxiliaryVariables {
  x: Array<number | null>;
  y: Array<number | null>;
}

export interface FirstPhaseStep {
  transportation: TransportTable;
  demands: Demands;
  stocks: Stocks;
  auxiliaryVariables?: AuxiliaryVariables;
  explanation?: string;
}

export interface NextBase {
  potential: number | null;
  x: number;
  y: number;
}

// todo these shouldn't be optionals
export interface SecondPhaseStep {
  transportation: TransportTable;
  auxiliaryVariables?: AuxiliaryVariables;
  nextBase?: NextBase;
  explanation?: string;
}
