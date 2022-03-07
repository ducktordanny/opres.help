import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

import {TransportTableComponent} from './transport-table.component';
import {TransportTableService} from './transport-table.service';

@NgModule({
  declarations: [TransportTableComponent],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatTableModule],
  providers: [TransportTableService],
  exports: [TransportTableComponent],
})
export class TransportTableModule {}
