import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NotFoundModule} from './pages/not-found/not-found.module';
import {NotFoundPageComponent} from './pages/not-found/not-found.page';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((module) => module.HomeModule),
  },
  {
    path: 'public-api-docs',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/api-docs/api-docs.module').then(
        (module) => module.ApiDocsModule,
      ),
  },
  {
    path: 'transport-problem',
    loadChildren: () =>
      import('./pages/transport-problem/transport-problem.module').then(
        (module) => module.TransportProblemModule,
      ),
  },
  {
    path: 'assignment-problem',
    loadChildren: () =>
      import('./pages/assignment-problem/assignment-problem.module').then(
        (module) => module.AssignmentProblemModule,
      ),
  },
  {path: '404', component: NotFoundPageComponent},
  {path: '**', redirectTo: '404'},
];

@NgModule({
  imports: [NotFoundModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {}
