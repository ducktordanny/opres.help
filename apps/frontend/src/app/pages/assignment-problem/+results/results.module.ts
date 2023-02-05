import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';

import {SideTableModule, TableModule} from '@opres/ui/tables';
import {TranslateModule} from '@ngx-translate/core';

import {IndependentZerosResultComponent} from './independent-zeros/independent-zeros-result.component';
import {KoenigAlgorithmResultComponent} from './koenig-algorithm/koenig-algorithm-result.component';
import {KoenigTableComponent} from './koenig-algorithm/koenig-table/koenig-table.component';
import {ReduceResultComponent} from './reduce/reduce-result.component';

@NgModule({
  declarations: [
    IndependentZerosResultComponent,
    KoenigAlgorithmResultComponent,
    KoenigTableComponent,
    ReduceResultComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    TranslateModule,
    MatDividerModule,
    MatTabsModule,
    SideTableModule,
  ],
  exports: [IndependentZerosResultComponent, KoenigAlgorithmResultComponent, ReduceResultComponent],
})
export class ResultsModule {}
