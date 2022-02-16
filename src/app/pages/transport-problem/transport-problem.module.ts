import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

import {TransportTableComponent} from 'src/app/components/tranport-table/transport-table.component';

import {TransportProblemComponent} from './transport-problem.component';
import {TransportProblemService} from './transport-problem.service';

@NgModule({
  declarations: [TransportProblemComponent, TransportTableComponent],
  imports: [CommonModule, MatButtonModule, MatTableModule],
  providers: [TransportProblemService],
})
export class TransportProblemModule {}
