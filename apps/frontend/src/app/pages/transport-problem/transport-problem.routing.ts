import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TabsModule} from './+tabs/tabs.module';
import {TransportProblemPageComponent} from './transport-problem.page';

const routes: Routes = [
  {path: '', redirectTo: 'all'},
  {
    path: '',
    component: TransportProblemPageComponent,
    children: [
      {
        path: 'all',
        loadChildren: () =>
          import('./+tabs/all-tab/all.tab.module').then(
            (module) => module.AllTabModule,
          ),
      },
      {
        path: 'second-phase',
        loadChildren: () =>
          import('./+tabs/second-phase-tab/second-phase.tab.module').then(
            (module) => module.SecondPhaseTabModule,
          ),
      },
      {
        path: 'epsilon',
        loadChildren: () =>
          import('./+tabs/epsilon-tab/epsilon.tab.module').then(
            (module) => module.EpsilonTabModule,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), TabsModule],
  exports: [RouterModule],
})
export class TransportProblemRouting {}
