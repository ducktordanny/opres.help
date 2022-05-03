import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

import {TranslateModule} from '@ngx-translate/core';

import {HomePageComponent} from './home.page';
import {HomeRouteModule} from './home.routing';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomeRouteModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    TranslateModule,
  ],
})
export class HomeModule {}
