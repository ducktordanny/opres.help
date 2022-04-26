import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

import {ThemeSwitcherComponent} from '@components/layout/theme-switcher/theme-switcher.component';

@NgModule({
  declarations: [ThemeSwitcherComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatMenuModule],
  exports: [ThemeSwitcherComponent],
})
export class ThemeSwitcherModule {}
