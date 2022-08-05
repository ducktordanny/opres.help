import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ApiDocsPageComponent} from './api-docs.page';

const routes: Routes = [{path: '', component: ApiDocsPageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiDocsRouting {}
