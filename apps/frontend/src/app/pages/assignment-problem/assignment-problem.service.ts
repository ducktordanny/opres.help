import {Injectable} from '@angular/core';

import {Table} from '@shared/types/table.types';

@Injectable()
export class AssignmentProblemService {
  public calculate(assignmentTable: Table): void {
    // first step
    const table = this.reduction(assignmentTable);
    console.log(table);
  }

  private reduction(table: Table): Table {
    for (const [index, row] of table.entries()) {
      const rowElements = Object.values(row) as Array<number>;
      const minimumOfRow = Math.min(...rowElements);
      for (const [key, value] of Object.entries(row))
        table[index][+key] = (value || 0) - minimumOfRow;
    }
    return table;
  }
}
