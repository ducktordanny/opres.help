import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AllTabComponent} from './all.tab.component';

const routes: Routes = [{path: '', component: AllTabComponent}];

@NgModule({
  declarations: [AllTabComponent],
  imports: [RouterModule.forChild(routes)],
})
export class AllTabModule {}
