import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TransportProblemService} from '../../transport-problem.service';
import {TabsModule} from '../tabs.module';

import {EpsilonTabComponent} from './epsilon.tab.component';

const routes: Routes = [{path: '', component: EpsilonTabComponent}];

@NgModule({
  declarations: [EpsilonTabComponent],
  imports: [RouterModule.forChild(routes), TabsModule],
  providers: [TransportProblemService],
})
export class EpsilonTabModule {}
