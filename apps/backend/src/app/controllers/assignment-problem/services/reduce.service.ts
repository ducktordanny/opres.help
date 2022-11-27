import {Injectable} from '@nestjs/common';

import {Table} from '@opres/shared/types';

@Injectable()
export class ReduceService {
  public calculate(assignmentTable: Table): Table {
    const table = this.reduceByRows([...assignmentTable]);
    return this.reduceByColumns(table);
  }

  private reduceByRows(table: Table): Table {
    for (const [index, row] of table.entries()) {
      const rowElements = Object.values(row) as Array<number>;
      const minimumOfRow = Math.min(...rowElements);
      for (const [key, value] of Object.entries(row)) table[index][+key] = (value || 0) - minimumOfRow;
    }
    return table;
  }

  private reduceByColumns(table: Table): Table {
    for (let index = 0; index < table.length; index++) {
      const columnElements = table.map((value) => value[index] || 0);
      const minimumOfColumn = Math.min(...columnElements);
      for (const element of table) element[index] = (element[index] || 0) - minimumOfColumn;
    }
    return table;
  }
}
