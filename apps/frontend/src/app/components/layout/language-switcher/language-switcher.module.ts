import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

import {LanguageSwitcherComponent} from '@frontend/components/layout/language-switcher/language-switcher.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [LanguageSwitcherComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    TranslateModule,
  ],
  exports: [LanguageSwitcherComponent],
})
export class LanguageSwitcherModule {}
