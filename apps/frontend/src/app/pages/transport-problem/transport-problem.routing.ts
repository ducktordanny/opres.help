import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AllTabComponent} from './+tabs/all-tab/all-tab.component';
import {EpsilonTabComponent} from './+tabs/epsilon-tab/epsilon.tab.component';
import {SecondPhaseTabComponent} from './+tabs/second-phase-tab/second-phase.tab.component';
import {TabsModule} from './+tabs/tabs.module';
import {TransportProblemPageComponent} from './transport-problem.page';

const routes: Routes = [
  {path: '', redirectTo: 'all'},
  {
    path: '',
    component: TransportProblemPageComponent,
    children: [
      {path: 'all', component: AllTabComponent},
      {path: 'second-phase', component: SecondPhaseTabComponent},
      {path: 'epsilon', component: EpsilonTabComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), TabsModule],
  exports: [RouterModule],
})
export class TransportProblemRouting {}
