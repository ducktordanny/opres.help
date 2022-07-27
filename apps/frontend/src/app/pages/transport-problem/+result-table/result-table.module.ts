import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';

import {SimpleTableModule} from '@opres/generatable-tables';

import {BadgedTableModule} from '../+badged-table/badged-table.module';

import {ResultTableComponent} from './result-table.component';

@NgModule({
  declarations: [ResultTableComponent],
  imports: [
    CommonModule,
    BadgedTableModule,
    MatDividerModule,
    SimpleTableModule,
  ],
  exports: [ResultTableComponent],
})
export class ResultTableModule {}
