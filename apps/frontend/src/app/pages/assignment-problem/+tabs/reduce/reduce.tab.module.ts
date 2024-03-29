import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TabsModule} from '../tabs.module';

import {ReduceTabComponent} from './reduce.tab.component';

const routes: Routes = [{path: '', component: ReduceTabComponent}];

@NgModule({
  declarations: [ReduceTabComponent],
  imports: [TabsModule, RouterModule.forChild(routes)],
})
export class ReduceTabModule {}
