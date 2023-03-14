import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';

import {TableModule} from '@opres/ui/tables';
import {UiTreeModule} from '@opres/ui/tsp-tree';
import {InfoCardModule} from '@frontend/components/info-card/info-card.module';
import {TranslateModule} from '@ngx-translate/core';

import {TspPipesModule} from '../pipes/tsp-pipes.module';

import {BnbMethodResultComponent} from './bnb-method/bnb-method-result.component';
import {BnbTreeInfoDialogComponent} from './bnb-method/bnb-tree-info.dialog.component';
import {ReduceResultComponent} from './reduce/reduce-result.component';

@NgModule({
  declarations: [BnbMethodResultComponent, BnbTreeInfoDialogComponent, ReduceResultComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatTabsModule,
    TranslateModule,
    TableModule,
    UiTreeModule,
    InfoCardModule,
    TspPipesModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [BnbMethodResultComponent, ReduceResultComponent],
})
export class ResultsModule {}
