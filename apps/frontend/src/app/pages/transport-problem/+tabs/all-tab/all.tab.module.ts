import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FirstPhaseStepsModule} from '../../+results/+first-phase-steps/first-phase-steps.module';
import {SecondPhaseStepsModule} from '../../+results/+second-phase-steps/second-phase-steps.module';
import {TransportProblemService} from '../../transport-problem.service';
import {TabsModule} from '../tabs.module';

import {AllTabComponent} from './all-tab.component';

const routes: Routes = [{path: '', component: AllTabComponent}];

@NgModule({
  declarations: [AllTabComponent],
  imports: [
    FirstPhaseStepsModule,
    RouterModule.forChild(routes),
    SecondPhaseStepsModule,
    TabsModule,
  ],
  providers: [TransportProblemService],
})
export class AllTabModule {}
