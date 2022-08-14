import {NgModule} from '@angular/core';

import {ArrayToTableColumnPipe} from './array-to-table-column.pipe';
import {ArrayToTableRowPipe} from './array-to-table-row.pipe';
import {TransportTableToTablePipe} from './transport-table-to-table.pipe';

@NgModule({
  declarations: [
    ArrayToTableRowPipe,
    ArrayToTableColumnPipe,
    TransportTableToTablePipe,
  ],
  exports: [
    ArrayToTableRowPipe,
    ArrayToTableColumnPipe,
    TransportTableToTablePipe,
  ],
})
export class TransportProblemPipesModule {}
