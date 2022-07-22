import {Row, Table} from '@shared/types/table.types';

import {TransportRow, TransportTable} from '../transport-problem.types';

const createNewResultRow = (costRow: Row): TransportRow =>
  Object.keys(costRow).reduce((result: TransportRow, key) => {
    result[key] = {cost: costRow[key]};
    return result;
  }, {});

/* Converts a simple Table into TransportTable. */
export function createResultTableFrom(costTable: Table): TransportTable {
  return costTable.map(createNewResultRow);
}
