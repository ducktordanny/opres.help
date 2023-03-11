import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TspPageComponent} from './tsp-page.page';

const routes: Routes = [{path: '', component: TspPageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TspRouting {}
