import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TabsModule} from '../tabs.module';

import {ReduceTabComponent} from './reduce.tab.component';

const routes: Routes = [{path: '', component: ReduceTabComponent}];

@NgModule({
  declarations: [ReduceTabComponent],
  imports: [RouterModule.forChild(routes), TabsModule],
})
export class ReduceTabModule {}
