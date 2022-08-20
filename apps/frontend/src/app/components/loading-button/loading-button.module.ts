import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {LoadingButtonComponent} from '@frontend/components/loading-button/loading-button.component';

@NgModule({
  declarations: [LoadingButtonComponent],
  imports: [CommonModule, MatButtonModule, MatProgressSpinnerModule],
  exports: [LoadingButtonComponent],
})
export class LoadingButtonModule {}
