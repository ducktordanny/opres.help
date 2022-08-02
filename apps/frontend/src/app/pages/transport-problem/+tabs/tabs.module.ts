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
import {TranslateModule} from '@ngx-translate/core';

import {FirstPhaseStepsModule} from '../+results/+first-phase-steps/first-phase-steps.module';
import {TransportTableModule} from '../+table/transport-table.module';

@NgModule({
  exports: [
    CommonModule,
    InfoCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FirstPhaseStepsModule,
    TranslateModule,
    TransportTableModule,
  ],
})
export class TabsModule {}
