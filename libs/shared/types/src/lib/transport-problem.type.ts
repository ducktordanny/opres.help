import {Table} from './table.type';

export type Stocks = Array<number>;
export type Demands = Array<number>;
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
}

export type TransportRow = Record<string, Cell>;
export type TransportTable = Array<TransportRow>;

export interface FirstPhaseStep {
  transportation: TransportTable;
  demands: Demands;
  stocks: Stocks;
  explanation?: string;
}

// todo: wip
export interface SecondPhaseStep {
  transportation: TransportTable;
  explanation?: string;
}
