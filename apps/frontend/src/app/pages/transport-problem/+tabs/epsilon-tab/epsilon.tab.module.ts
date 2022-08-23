import {NgModule} from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import {RouterModule, Routes} from '@angular/router';

import {InputTableModule, TableModule} from '@opres/ui/tables';

import {EpsilonResultModule} from '../../+results/epsilon-result/epsilon-result.module';
import {TransportProblemService} from '../../transport-problem.service';
import {TabsModule} from '../tabs.module';

import {EpsilonTabComponent} from './epsilon.tab.component';

const routes: Routes = [{path: '', component: EpsilonTabComponent}];

@NgModule({
  declarations: [EpsilonTabComponent],
  imports: [
    EpsilonResultModule,
    InputTableModule,
    MatStepperModule,
    RouterModule.forChild(routes),
    TableModule,
    TabsModule,
  ],
  providers: [TransportProblemService],
})
export class EpsilonTabModule {}
