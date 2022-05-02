import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';

import {TranslateModule} from '@ngx-translate/core';

import {HomePageComponent} from './home.page';
import {HomeRouteModule} from './home.routing';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomeRouteModule,
    MatCardModule,
    MatFormFieldModule,
    TranslateModule,
  ],
})
export class HomeModule {}
