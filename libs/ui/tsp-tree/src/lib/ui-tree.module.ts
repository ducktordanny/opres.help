import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {TreeComponent} from './tree.component';

@NgModule({
  declarations: [TreeComponent],
  imports: [CommonModule],
  exports: [TreeComponent],
})
export class UiTreeModule {}
