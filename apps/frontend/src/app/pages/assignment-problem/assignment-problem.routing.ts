import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AssignmentProblemPageComponent} from './assignment-problem.page';

const routes: Routes = [
  {path: '', redirectTo: 'all', pathMatch: 'full'},
  {
    path: '',
    component: AssignmentProblemPageComponent,
    children: [
      {
        path: 'all',
        loadChildren: () =>
          import('./+tabs/all/all.tab.module').then((module) => module.AllTabModule),
      },
      {
        path: 'koenig-algorithm',
        loadChildren: () =>
          import('./+tabs/koenig-algorithm/koenig-algorithm.tab.module').then(
            (module) => module.KoenigAlgorithmTabModule,
          ),
      },
      {
        path: 'independent-zeros',
        loadChildren: () =>
          import('./+tabs/independent-zeros/independent-zeros.tab.module').then(
            (module) => module.IndependentZerosTabModule,
          ),
      },
      {
        path: 'reduce',
        loadChildren: () =>
          import('./+tabs/reduce/reduce.tab.module').then((module) => module.ReduceTabModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignmentProblemRouting {}
