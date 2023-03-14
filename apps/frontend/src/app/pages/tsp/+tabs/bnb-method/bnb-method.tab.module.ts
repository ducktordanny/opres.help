import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {InfoCardModule} from '@frontend/components/info-card/info-card.module';

import {TabsModule} from '../tabs.module';

import {BnbMethodTabComponent} from './bnb-method.tab.component';

const routes: Routes = [{path: '', component: BnbMethodTabComponent}];

@NgModule({
  declarations: [BnbMethodTabComponent],
  imports: [RouterModule.forChild(routes), TabsModule, InfoCardModule],
})
export class BnbMethodTabModule {}
