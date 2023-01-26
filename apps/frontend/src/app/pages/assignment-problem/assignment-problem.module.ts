import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

import {ErrorHandlerService} from '@frontend/services/error-handler.service';
import {TranslateModule} from '@ngx-translate/core';

import {AssignmentProblemPageComponent} from './assignment-problem.page';
import {AssignmentProblemRouting} from './assignment-problem.routing';
import {AssignmentProblemService} from './assignment-problem.service';

@NgModule({
  declarations: [AssignmentProblemPageComponent],
  imports: [
    AssignmentProblemRouting,
    CommonModule,
    HttpClientModule,
    MatTabsModule,
    TranslateModule,
  ],
  providers: [AssignmentProblemService, ErrorHandlerService],
})
export class AssignmentProblemModule {}
