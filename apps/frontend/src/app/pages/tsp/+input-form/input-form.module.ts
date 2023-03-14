import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

import {InputTableModule} from '@opres/ui/tables';
import {InfoCardModule} from '@frontend/components/info-card/info-card.module';
import {LoadingButtonModule} from '@frontend/components/loading-button/loading-button.module';
import {TranslateModule} from '@ngx-translate/core';

import {InputFormComponent} from './input-form.component';

@NgModule({
  declarations: [InputFormComponent],
  imports: [
    CommonModule,
    InputTableModule,
    InfoCardModule,
    LoadingButtonModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  exports: [InputFormComponent],
})
export class InputFormModule {}
