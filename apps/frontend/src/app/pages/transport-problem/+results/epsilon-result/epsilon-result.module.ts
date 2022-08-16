import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';

import {EpsilonResultComponent} from './epsilon-result.component';

@NgModule({
  declarations: [EpsilonResultComponent],
  imports: [CommonModule, MatCardModule],
  exports: [EpsilonResultComponent],
})
export class EpsilonResultModule {}
