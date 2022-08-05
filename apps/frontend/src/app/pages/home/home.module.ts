import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

import {InfoCardModule} from '@frontend/components/info-card/info-card.module';
import {TranslateModule} from '@ngx-translate/core';

import {HomePageComponent} from './home.page';
import {HomeRouteModule} from './home.routing';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomeRouteModule,
    InfoCardModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    TranslateModule,
  ],
})
export class HomeModule {}
