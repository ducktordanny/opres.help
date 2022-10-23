import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FirstPhaseResultInputModule} from '../../+first-phase-result-input/first-phase-result-input.module';
import {EpsilonResultModule} from '../../+results/epsilon-result/epsilon-result.module';
import {TabsModule} from '../tabs.module';

import {EpsilonTabComponent} from './epsilon.tab.component';

const routes: Routes = [{path: '', component: EpsilonTabComponent}];

@NgModule({
  declarations: [EpsilonTabComponent],
  imports: [
    EpsilonResultModule,
    FirstPhaseResultInputModule,
    RouterModule.forChild(routes),
    TabsModule,
  ],
})
export class EpsilonTabModule {}
