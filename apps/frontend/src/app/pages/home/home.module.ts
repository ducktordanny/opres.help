import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';

import {TranslateModule} from '@ngx-translate/core';

import {HomePageComponent} from './home.page';
import {HomeRouteModule} from './home.routing';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomeRouteModule, MatFormFieldModule, TranslateModule],
})
export class HomeModule {}
