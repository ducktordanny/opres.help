import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ChangelogPageComponent} from './changelog.page';

const routes: Routes = [{path: '', component: ChangelogPageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangelogRouteModule {}
