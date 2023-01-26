import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {TableModule} from '@opres/ui/tables';
import {ErrorHandlerService} from '@frontend/services/error-handler.service';

import {InputFormModule} from '../+input-form/input-form.module';
import {ResultsModule} from '../+results/results.module';
import {AssignmentProblemService} from '../assignment-problem.service';

@NgModule({
  providers: [AssignmentProblemService, ErrorHandlerService],
  exports: [CommonModule, InputFormModule, MatSnackBarModule, ResultsModule, TableModule],
})
export class TabsModule {}
