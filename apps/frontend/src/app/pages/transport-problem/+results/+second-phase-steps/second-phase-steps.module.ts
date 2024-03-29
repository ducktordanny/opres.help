import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';

import {TableModule} from '@opres/ui/tables';
import {InfoCardModule} from '@frontend/components/info-card/info-card.module';
import {EmptySelectedValuesModule} from '@frontend/pipes/empty-selected-values/empty-selected-values.module';
import {TranslateModule} from '@ngx-translate/core';

import {TransportProblemPipesModule} from '../../pipes/transport-problem-pipes.module';
import {EpsilonResultModule} from '../epsilon-result/epsilon-result.module';

import {SecondPhaseStepsComponent} from './second-phase-steps.component';

@NgModule({
  declarations: [SecondPhaseStepsComponent],
  imports: [
    CommonModule,
    EmptySelectedValuesModule,
    EpsilonResultModule,
    InfoCardModule,
    MatCardModule,
    MatDividerModule,
    MatTabsModule,
    TableModule,
    TranslateModule,
    TransportProblemPipesModule,
  ],
  exports: [SecondPhaseStepsComponent],
})
export class SecondPhaseStepsModule {}
