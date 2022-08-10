import {NgModule} from '@angular/core';

import {ArrayToTablePipe} from './array-to-table.pipe';
import {ArrayToTableRowPipe} from './array-to-table-row.pipe';
import {TransportTableToTablePipe} from './transport-table-to-table.pipe';

@NgModule({
  declarations: [
    ArrayToTablePipe,
    ArrayToTableRowPipe,
    TransportTableToTablePipe,
  ],
  exports: [ArrayToTablePipe, ArrayToTableRowPipe, TransportTableToTablePipe],
})
export class TransportProblemPipesModule {}
