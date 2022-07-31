import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {InputTableModule, SimpleTableModule} from '@opres/generatable-tables';
import {InfoCardModule} from '@frontend/components/info-card/info-card.module';
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
    InfoCardModule,
    InputTableModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
    SimpleTableModule,
    TranslateModule,
  ],
  providers: [AssignmentProblemService],
})
export class AssignmentProblemModule {}
