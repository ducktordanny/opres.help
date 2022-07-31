import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';

import {TranslateModule} from '@ngx-translate/core';

import {TransportProblemPageComponent} from './transport-problem.page';
import {TransportProblemRouting} from './transport-problem.routing';

@NgModule({
  declarations: [TransportProblemPageComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatTabsModule,
    TranslateModule,
    TransportProblemRouting,
  ],
})
export class TransportProblemModule {}
