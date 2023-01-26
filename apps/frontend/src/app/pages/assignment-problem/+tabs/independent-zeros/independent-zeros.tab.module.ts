import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {IndependentZerosTabComponent} from './independent-zeros.tab.component';

const routes: Routes = [{path: '', component: IndependentZerosTabComponent}];

@NgModule({
  declarations: [IndependentZerosTabComponent],
  imports: [RouterModule.forChild(routes)],
})
export class IndependentZerosTabModule {}
