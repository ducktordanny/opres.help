import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

import {LanguageSwitcherComponent} from '@components/layout/language-switcher/language-switcher.component';

@NgModule({
  declarations: [LanguageSwitcherComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatMenuModule],
  exports: [LanguageSwitcherComponent],
})
export class LanguageSwitcherModule {}
