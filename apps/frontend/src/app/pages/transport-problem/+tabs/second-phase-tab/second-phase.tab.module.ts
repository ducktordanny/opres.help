import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TransportProblemService} from '../../transport-problem.service';
import {TabsModule} from '../tabs.module';

import {SecondPhaseTabComponent} from './second-phase.tab.component';

const routes: Routes = [{path: '', component: SecondPhaseTabComponent}];

@NgModule({
  declarations: [SecondPhaseTabComponent],
  imports: [RouterModule.forChild(routes), TabsModule],
  providers: [TransportProblemService],
})
export class SecondPhaseTabModule {}
