import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

import {LanguageSwitcherModule} from '@components/layout/language-switcher/language-switcher.module';
import {LayoutComponent} from '@components/layout/layout.component';
import {ThemeSwitcherModule} from '@components/layout/theme-switcher/theme-switcher.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LanguageSwitcherModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,
    ThemeSwitcherModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
