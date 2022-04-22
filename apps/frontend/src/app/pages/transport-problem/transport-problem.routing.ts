import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TransportProblemPageComponent} from './transport-problem.page';

const routes: Routes = [{path: '', component: TransportProblemPageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportProblemRouting {}
