import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import {BadgedTableModule} from '@components/badged-table/badged-table.module';
import {TranslateModule} from '@ngx-translate/core';

import {ResultTableModule} from './+result-table/result-table.module';
import {TransportTableModule} from './+table/transport-table.module';
import {TransportProblemPageComponent} from './transport-problem.page';
import {TransportProblemRouting} from './transport-problem.routing';
import {TransportProblemService} from './transport-problem.service';

@NgModule({
  declarations: [TransportProblemPageComponent],
  imports: [
    BadgedTableModule,
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    ResultTableModule,
    TranslateModule,
    TransportProblemRouting,
    TransportTableModule,
  ],
  providers: [TransportProblemService],
})
export class TransportProblemModule {}
