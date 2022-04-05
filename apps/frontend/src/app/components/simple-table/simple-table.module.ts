import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

import {SimpleTableComponent} from './simple-table.component';

@NgModule({
  declarations: [SimpleTableComponent],
  imports: [CommonModule, MatTableModule],
  exports: [SimpleTableComponent],
})
export class SimpleTableModule {}
