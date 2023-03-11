import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TspPageComponent} from './tsp.page';

const routes: Routes = [
  {path: '', redirectTo: 'bnb-method', pathMatch: 'full'},
  {
    path: '',
    component: TspPageComponent,
    children: [
      {
        path: 'bnb-method',
        loadChildren: () =>
          import('./+tabs/bnb-method/bnb-method.tab.module').then(
            (module) => module.BnbMethodTabModule,
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
export class TspRouting {}
