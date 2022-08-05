import {RowDefs, Table} from '@opres/shared/types';

/** Returns a Table with null values what can be used in the
 * dataSource of angular material table. This function can
 * be used to create dynamically sized tables */
export function tableSourceFrom(rows: number, rowDefinitions: RowDefs): Table {
  const rowContent = createRowFrom(rowDefinitions);
  // the spreading is necessary to not create reference between rows
  return Array.from({length: rows}, () => ({...rowContent}));
}

/** Returns a row for a Table with null values. */
export const createRowFrom = (rowDefinitions: RowDefs) =>
  rowDefinitions.reduce((acc, curr) => ({...acc, [curr]: null}), {});

/** Returns an array of row definitions for a given number of columns
 * with the values from 0 to columns-1 as strings. It can be used as
 * a part of creating material table with dynamic size. */
export const rowDefinitionsFrom = (columns: number): RowDefs =>
  Array.from({length: columns}, (_, index) => `${index}`);
