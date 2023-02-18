import {ProblemTable} from '@opres/shared/types';
import {cloneDeep, entries, values} from 'lodash';

export type ReducerCallback = (cell: number | null, min: number) => number | null;

export function reduceByRows(
  table: ProblemTable,
  reducer: ReducerCallback,
  minNullReplacer = 0,
): ProblemTable {
  const responseTable = cloneDeep(table);
  for (const [index, row] of responseTable.entries()) {
    const rowElements = values(row).map((cell) => cell ?? minNullReplacer) as Array<number>;
    const minimumOfRow = Math.min(...rowElements);
    for (const [key, value] of entries(row))
      responseTable[index][+key] = reducer(value, minimumOfRow);
  }
  return responseTable;
}

export function reduceByColumns(
  table: ProblemTable,
  reducer: ReducerCallback,
  minNullReplacer = 0,
): ProblemTable {
  for (let index = 0; index < table.length; index++) {
    const columnElements = table.map((value) => value[index] ?? minNullReplacer);
    const minimumOfColumn = Math.min(...columnElements);
    for (const element of table) element[index] = reducer(element[index], minimumOfColumn);
  }
  return table;
}
