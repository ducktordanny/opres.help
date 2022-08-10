import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';

import {RowDefinitionsModule} from '../pipes/row-definitions/row-definitions.module';

import {TableComponent} from './table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, MatBadgeModule, MatTableModule, RowDefinitionsModule],
  exports: [TableComponent],
})
export class TableModule {}
