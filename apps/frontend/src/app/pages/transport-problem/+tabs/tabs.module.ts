import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';

import {InfoCardModule} from '@frontend/components/info-card/info-card.module';
import {TranslateModule} from '@ngx-translate/core';

import {ResultTableModule} from '../+result-table/result-table.module';
import {TransportTableModule} from '../+table/transport-table.module';
import {TransportProblemService} from '../transport-problem.service';

import {AllTabComponent} from './all-tab/all-tab.component';
import {EpsilonTabComponent} from './epsilon-tab/epsilon.tab.component';
import {SecondPhaseTabComponent} from './second-phase-tab/second-phase.tab.component';

@NgModule({
  declarations: [AllTabComponent, SecondPhaseTabComponent, EpsilonTabComponent],
  imports: [
    CommonModule,
    InfoCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    ReactiveFormsModule,
    ResultTableModule,
    TranslateModule,
    TransportTableModule,
  ],
  providers: [TransportProblemService],
  exports: [AllTabComponent, SecondPhaseTabComponent, EpsilonTabComponent],
})
export class TabsModule {}
