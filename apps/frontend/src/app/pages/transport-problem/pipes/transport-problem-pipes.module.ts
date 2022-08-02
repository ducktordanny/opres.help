import {NgModule} from '@angular/core';

import {DemandsToTablePipe} from './demands-to-table.pipe';
import {StocksToTablePipe} from './stocks-to-table.pipe';

@NgModule({
  declarations: [DemandsToTablePipe, StocksToTablePipe],
  exports: [DemandsToTablePipe, StocksToTablePipe],
})
export class TransportProblemPipesModule {}
