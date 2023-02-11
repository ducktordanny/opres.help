import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';

import {SideTableModule, TableModule} from '@opres/ui/tables';
import {ObjectSizeModule} from '@frontend/pipes/object-size/object-size.module';
import {TranslateModule} from '@ngx-translate/core';

import {HungarianMethodComponent} from './hungarian-method/hungarian-method.component';
import {IndependentZerosResultComponent} from './independent-zeros/independent-zeros-result.component';
import {KoenigAlgorithmResultComponent} from './koenig-algorithm/koenig-algorithm-result.component';
import {KoenigTableComponent} from './koenig-algorithm/koenig-table/koenig-table.component';
import {ReduceResultComponent} from './reduce/reduce-result.component';

@NgModule({
  declarations: [
    HungarianMethodComponent,
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
    ObjectSizeModule,
    SideTableModule,
  ],
  exports: [
    IndependentZerosResultComponent,
    KoenigAlgorithmResultComponent,
    ReduceResultComponent,
    KoenigTableComponent,
    HungarianMethodComponent,
  ],
})
export class ResultsModule {}
