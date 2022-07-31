import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import {InfoCardModule} from '@components/info-card/info-card.module';
import {TranslateModule} from '@ngx-translate/core';

import {ResultTableModule} from '../+result-table/result-table.module';
import {TransportTableModule} from '../+table/transport-table.module';
import {TransportProblemService} from '../transport-problem.service';

import {EpsilonTabComponent} from './epsilon-tab/epsilon.tab.component';
import {FullCalculationTabComponent} from './full-calculation-tab/full-calculation.tab.component';
import {SecondPhaseTabComponent} from './second-phase-tab/second-phase.tab.component';

@NgModule({
  declarations: [
    FullCalculationTabComponent,
    SecondPhaseTabComponent,
    EpsilonTabComponent,
  ],
  imports: [
    CommonModule,
    InfoCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    ResultTableModule,
    TranslateModule,
    TransportTableModule,
  ],
  providers: [TransportProblemService],
  exports: [
    FullCalculationTabComponent,
    SecondPhaseTabComponent,
    EpsilonTabComponent,
  ],
})
export class TabsModule {}
