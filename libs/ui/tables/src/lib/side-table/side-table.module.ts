import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

import {RowDefinitionsModule} from '../pipes/row-definitions/row-definitions.module';

import {SideTableComponent} from './side-table.component';

@NgModule({
  declarations: [SideTableComponent],
  imports: [CommonModule, MatTableModule, RowDefinitionsModule],
  exports: [SideTableComponent],
})
export class SideTableModule {}
