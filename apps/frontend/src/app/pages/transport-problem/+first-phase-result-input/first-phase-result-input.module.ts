import {NgModule} from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';

import {InputTableModule, TableModule} from '@opres/ui/tables';

import {TabsModule} from '../+tabs/tabs.module';

import {FirstPhaseResultInputComponent} from './first-phase-result-input.component';

@NgModule({
  declarations: [FirstPhaseResultInputComponent],
  imports: [InputTableModule, MatStepperModule, TableModule, TabsModule],
  exports: [FirstPhaseResultInputComponent],
})
export class FirstPhaseResultInputModule {}
