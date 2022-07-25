import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

import {InfoCardModule} from '@components/info-card/info-card.module';
import {InputTableModule} from '@components/input-table/input-table.module';
import {SimpleTableModule} from '@components/simple-table/simple-table.module';
import {TranslateModule} from '@ngx-translate/core';

import {AssignmentProblemPageComponent} from './assignment-problem.page';
import {AssignmentProblemRouting} from './assignment-problem.routing';
import {AssignmentProblemService} from './assignment-problem.service';

@NgModule({
  declarations: [AssignmentProblemPageComponent],
  imports: [
    AssignmentProblemRouting,
    CommonModule,
    InfoCardModule,
    InputTableModule,
    MatButtonModule,
    MatSelectModule,
    SimpleTableModule,
    TranslateModule,
  ],
  providers: [AssignmentProblemService],
})
export class AssignmentProblemModule {}
