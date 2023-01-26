import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import {InputTableModule} from '@opres/ui/tables';
import {TranslateModule} from '@ngx-translate/core';

import {InputFormComponent} from './input-form.component';

@NgModule({
  declarations: [InputFormComponent],
  imports: [
    CommonModule,
    InputTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  exports: [InputFormComponent],
})
export class InputFormModule {}
