import {Row, Table} from '@opres/shared/types';
import {TransportRow, TransportTable} from '@opres/shared/types';

const createNewResultRow = (costRow: Row): TransportRow =>
  Object.keys(costRow).reduce((result: TransportRow, key) => {
    result[key] = {cost: costRow[key]};
    return result;
  }, {});

/* Converts a simple Table into TransportTable. */
export function createResultTableFrom(costTable: Table): TransportTable {
  return costTable.map(createNewResultRow);
}
