import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

import {TranslateModule} from '@ngx-translate/core';

import {TransportProblemPageComponent} from './transport-problem.page';
import {TransportProblemRouting} from './transport-problem.routing';

@NgModule({
  declarations: [TransportProblemPageComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    TranslateModule,
    TransportProblemRouting,
  ],
})
export class TransportProblemModule {}
