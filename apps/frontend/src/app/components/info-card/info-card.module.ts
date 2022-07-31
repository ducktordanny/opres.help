import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import {InfoCardComponent} from '@frontend/components/info-card/info-card.component';

@NgModule({
  declarations: [InfoCardComponent],
  imports: [CommonModule, MatCardModule, MatIconModule],
  exports: [InfoCardComponent],
})
export class InfoCardModule {}
