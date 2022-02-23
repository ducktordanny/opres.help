import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

import {TransportTableComponent} from '../../components/tranport-table/transport-table.component';

import {TransportProblemComponent} from './transport-problem.component';
import {TransportProblemService} from './transport-problem.service';

@NgModule({
  declarations: [TransportProblemComponent],
  imports: [CommonModule, MatButtonModule, TransportTableModule],
  providers: [TransportProblemService],
})
export class TransportProblemModule {}
