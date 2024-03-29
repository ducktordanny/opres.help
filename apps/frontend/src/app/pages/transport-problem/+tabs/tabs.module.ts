import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {InfoCardModule} from '@frontend/components/info-card/info-card.module';
import {LoadingButtonModule} from '@frontend/components/loading-button/loading-button.module';
import {ErrorHandlerService} from '@frontend/services/error-handler.service';
import {TranslateModule} from '@ngx-translate/core';

import {FirstPhaseStepsModule} from '../+results/+first-phase-steps/first-phase-steps.module';
import {TransportTableModule} from '../+table/transport-table.module';
import {TransportProblemPipesModule} from '../pipes/transport-problem-pipes.module';
import {TransportProblemService} from '../transport-problem.service';

@NgModule({
  providers: [ErrorHandlerService, TransportProblemService],
  exports: [
    CommonModule,
    InfoCardModule,
    LoadingButtonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FirstPhaseStepsModule,
    TranslateModule,
    TransportProblemPipesModule,
    TransportTableModule,
  ],
})
export class TabsModule {}
