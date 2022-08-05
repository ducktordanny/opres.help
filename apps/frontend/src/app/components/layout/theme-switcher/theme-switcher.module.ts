import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

import {ThemeSwitcherComponent} from '@frontend/components/layout/theme-switcher/theme-switcher.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [ThemeSwitcherComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    TranslateModule,
  ],
  exports: [ThemeSwitcherComponent],
})
export class ThemeSwitcherModule {}
