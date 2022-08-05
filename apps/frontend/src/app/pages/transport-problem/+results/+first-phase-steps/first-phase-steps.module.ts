import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';

import {SimpleTableModule} from '@opres/generatable-tables';
import {TranslateModule} from '@ngx-translate/core';

import {TransportProblemPipesModule} from '../../pipes/transport-problem-pipes.module';
import {BadgedTableModule} from '../badged-table/badged-table.module';

import {FirstPhaseStepsComponent} from './first-phase-steps.component';

@NgModule({
  declarations: [FirstPhaseStepsComponent],
  imports: [
    CommonModule,
    BadgedTableModule,
    MatCardModule,
    MatDividerModule,
    MatTabsModule,
    SimpleTableModule,
    TransportProblemPipesModule,
    TranslateModule,
  ],
  exports: [FirstPhaseStepsComponent],
})
export class FirstPhaseStepsModule {}
