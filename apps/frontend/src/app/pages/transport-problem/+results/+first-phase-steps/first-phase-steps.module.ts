import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';

import {TableModule} from '@opres/ui/tables';
import {TranslateModule} from '@ngx-translate/core';

import {TransportProblemPipesModule} from '../../pipes/transport-problem-pipes.module';
import {EpsilonResultModule} from '../epsilon-result/epsilon-result.module';

import {FirstPhaseStepsComponent} from './first-phase-steps.component';

@NgModule({
  declarations: [FirstPhaseStepsComponent],
  imports: [
    CommonModule,
    EpsilonResultModule,
    MatCardModule,
    MatDividerModule,
    MatTabsModule,
    TableModule,
    TransportProblemPipesModule,
    TranslateModule,
  ],
  exports: [FirstPhaseStepsComponent],
})
export class FirstPhaseStepsModule {}
