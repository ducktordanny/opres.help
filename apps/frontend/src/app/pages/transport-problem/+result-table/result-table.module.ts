import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';

import {BadgedTableModule} from '@components/badged-table/badged-table.module';
import {SimpleTableModule} from '@components/simple-table/simple-table.module';

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
