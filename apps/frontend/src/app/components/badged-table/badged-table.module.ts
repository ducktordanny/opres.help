import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';

import {BadgedTableComponent} from './badged-table.component';

@NgModule({
  declarations: [BadgedTableComponent],
  imports: [CommonModule, MatBadgeModule, MatFormFieldModule, MatTableModule],
  exports: [BadgedTableComponent],
})
export class BadgedTableModule {}
