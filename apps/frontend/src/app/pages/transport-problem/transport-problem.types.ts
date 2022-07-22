import {Table} from '@shared/types/table.types';

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
  cost: number | null;
  transported?: number;
}

export type TransportRow = Record<string, Cell>;
export type TransportTable = Array<TransportRow>;

export interface CalculationProcess {
  transportation: TransportTable;
  demands: Demands;
  stocks: Stocks;
  explanation?: string;
}

export interface Result {
  epsilon: number;
  table: TransportTable;
}
