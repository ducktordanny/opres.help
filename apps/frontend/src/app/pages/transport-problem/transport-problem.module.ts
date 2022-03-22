import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import {TransportTableModule} from './+table/transport-table.module';
import {TransportProblemComponent} from './transport-problem.component';
import {TransportProblemService} from './transport-problem.service';

@NgModule({
  declarations: [TransportProblemComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    TransportTableModule,
  ],
  providers: [TransportProblemService],
})
export class TransportProblemModule {}
