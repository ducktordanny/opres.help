import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

import {InputTableModule} from "@components/input-table/input-table.module";

import {AssignmentProblemPageComponent} from './assignment-problem.page';
import {AssignmentProblemRouting} from './assignment-problem.routing';

@NgModule({
  declarations: [AssignmentProblemPageComponent],
  imports: [AssignmentProblemRouting, InputTableModule, MatButtonModule, MatSelectModule],
})
export class AssignmentProblemModule {}
