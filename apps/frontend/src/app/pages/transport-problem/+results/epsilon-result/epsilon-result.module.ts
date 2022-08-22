import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';

import {SanitizeHtmlModule} from '@frontend/pipes/sanitize-html/sanitize-html.module';

import {EpsilonResultComponent} from './epsilon-result.component';

@NgModule({
  declarations: [EpsilonResultComponent],
  imports: [CommonModule, MatCardModule, SanitizeHtmlModule],
  exports: [EpsilonResultComponent],
})
export class EpsilonResultModule {}
