import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

import {LanguageSwitcherModule} from '@frontend/components/layout/language-switcher/language-switcher.module';
import {LayoutComponent} from '@frontend/components/layout/layout.component';
import {ThemeSwitcherModule} from '@frontend/components/layout/theme-switcher/theme-switcher.module';
import {TranslateModule} from '@ngx-translate/core';

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
    TranslateModule,
    MatProgressBarModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
