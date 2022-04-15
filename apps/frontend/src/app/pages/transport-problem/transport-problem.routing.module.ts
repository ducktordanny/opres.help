import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TransportProblemComponent} from './transport-problem.component';

const routes: Routes = [{path: '', component: TransportProblemComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportProblemRoutingModule {}
