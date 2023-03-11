import {NgModule} from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {InputFormModule} from '../+input-form/input-form.module';
import {TspService} from '../tsp.service';

@NgModule({
  providers: [TspService],
  exports: [InputFormModule, MatSnackBarModule],
})
export class TabsModule {}
