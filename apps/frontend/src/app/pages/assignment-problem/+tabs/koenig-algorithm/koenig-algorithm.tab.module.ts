import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {KoenigAlgorithmTabComponent} from './koenig-algorithm.tab.component';

const routes: Routes = [{path: '', component: KoenigAlgorithmTabComponent}];

@NgModule({
  declarations: [KoenigAlgorithmTabComponent],
  imports: [RouterModule.forChild(routes)],
})
export class KoenigAlgorithmTabModule {}
