import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

import {InputTableComponent} from './input-table.component';

@NgModule({
  declarations: [InputTableComponent],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatTableModule],
  exports: [InputTableComponent],
})
export class InputTableModule {}
