import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AssignmentProblemPageComponent} from './assignment-problem.page';

const routes: Routes = [{path: '', component: AssignmentProblemPageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignmentProblemRouting {}
