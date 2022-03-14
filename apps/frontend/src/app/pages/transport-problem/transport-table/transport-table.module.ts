import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

import {InputTableModule} from '../../../components/input-table/input-table.module';

import {TransportTableComponent} from './transport-table.component';
import {TransportTableService} from './transport-table.service';

@NgModule({
  declarations: [TransportTableComponent],
  imports: [
    CommonModule,
    InputTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ],
  providers: [TransportTableService],
  exports: [TransportTableComponent],
})
export class TransportTableModule {}
