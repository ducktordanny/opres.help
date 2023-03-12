import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';

import {TableModule} from '@opres/ui/tables';
import {UiTreeModule} from '@opres/ui/tree';
import {InfoCardModule} from '@frontend/components/info-card/info-card.module';
import {TranslateModule} from '@ngx-translate/core';

import {TspPipesModule} from '../pipes/tsp-pipes.module';

import {BnbMethodResultComponent} from './bnb-method/bnb-method-result.component';
import {ReduceResultComponent} from './reduce/reduce-result.component';

@NgModule({
  declarations: [BnbMethodResultComponent, ReduceResultComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatTabsModule,
    TranslateModule,
    TableModule,
    UiTreeModule,
    InfoCardModule,
    TspPipesModule,
  ],
  exports: [BnbMethodResultComponent, ReduceResultComponent],
})
export class ResultsModule {}
