import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

import {TranslateModule} from '@ngx-translate/core';

import {AssignmentProblemPageComponent} from './assignment-problem.page';
import {AssignmentProblemRouting} from './assignment-problem.routing';

@NgModule({
  declarations: [AssignmentProblemPageComponent],
  imports: [
    AssignmentProblemRouting,
    CommonModule,
    HttpClientModule,
    MatTabsModule,
    TranslateModule,
  ],
})
export class AssignmentProblemModule {}
