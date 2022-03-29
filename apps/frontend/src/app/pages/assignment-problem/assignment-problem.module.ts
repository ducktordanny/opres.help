import {NgModule} from '@angular/core';

import {InputTableModule} from "@components/input-table/input-table.module";

import {AssignmentProblemPageComponent} from './assignment-problem.page';
import {AssignmentProblemRouting} from './assignment-problem.routing';

@NgModule({
  declarations: [AssignmentProblemPageComponent],
  imports: [AssignmentProblemRouting, InputTableModule],
})
export class AssignmentProblemModule {}
