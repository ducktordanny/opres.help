import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {ErrorHandlerService} from '@frontend/services/error-handler.service';

import {InputFormModule} from '../+input-form/input-form.module';
import {TspService} from '../tsp.service';

@NgModule({
  providers: [TspService, ErrorHandlerService],
  exports: [CommonModule, InputFormModule, MatSnackBarModule],
})
export class TabsModule {}
