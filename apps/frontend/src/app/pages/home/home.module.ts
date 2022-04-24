import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {HomePageComponent} from './home.page';
import {HomeRouteModule} from './home.routing';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomeRouteModule],
})
export class HomeModule {}
