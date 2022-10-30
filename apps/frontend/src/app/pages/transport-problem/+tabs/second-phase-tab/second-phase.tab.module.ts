import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FirstPhaseResultInputModule} from '../../+first-phase-result-input/first-phase-result-input.module';
import {SecondPhaseStepsModule} from '../../+results/+second-phase-steps/second-phase-steps.module';
import {TabsModule} from '../tabs.module';

import {SecondPhaseTabComponent} from './second-phase.tab.component';

const routes: Routes = [{path: '', component: SecondPhaseTabComponent}];

@NgModule({
  declarations: [SecondPhaseTabComponent],
  imports: [
    FirstPhaseResultInputModule,
    RouterModule.forChild(routes),
    SecondPhaseStepsModule,
    TabsModule,
  ],
})
export class SecondPhaseTabModule {}
