import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import {BadgedTableModule} from '@components/badged-table/badged-table.module';

import {ResultTableModule} from './+result-table/result-table.module';
import {TransportTableModule} from './+table/transport-table.module';
import {TransportProblemComponent} from './transport-problem.component';
import {TransportProblemRoutingModule} from './transport-problem.routing.module';
import {TransportProblemService} from './transport-problem.service';

@NgModule({
  declarations: [TransportProblemComponent],
  imports: [
    BadgedTableModule,
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    ResultTableModule,
    TransportProblemRoutingModule,
    TransportTableModule,
  ],
  providers: [TransportProblemService],
})
export class TransportProblemModule {}
