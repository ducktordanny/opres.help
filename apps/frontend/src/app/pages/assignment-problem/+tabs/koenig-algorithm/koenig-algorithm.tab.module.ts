import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TabsModule} from '../tabs.module';

import {KoenigAlgorithmTabComponent} from './koenig-algorithm.tab.component';

const routes: Routes = [{path: '', component: KoenigAlgorithmTabComponent}];

@NgModule({
  declarations: [KoenigAlgorithmTabComponent],
  imports: [TabsModule, RouterModule.forChild(routes)],
})
export class KoenigAlgorithmTabModule {}
