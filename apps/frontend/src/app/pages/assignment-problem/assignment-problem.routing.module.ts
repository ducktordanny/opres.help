import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AssignmentProblemComponent} from './assignment-problem.component';

const routes: Routes = [{path: '', component: AssignmentProblemComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignmentProblemRoutingModule {}
