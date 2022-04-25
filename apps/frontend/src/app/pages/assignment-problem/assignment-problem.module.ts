import {NgModule} from '@angular/core';

import {AssignmentProblemPageComponent} from './assignment-problem.page';
import {AssignmentProblemRouting} from './assignment-problem.routing';

@NgModule({
  declarations: [AssignmentProblemPageComponent],
  imports: [AssignmentProblemRouting],
})
export class AssignmentProblemModule {}
