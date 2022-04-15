import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {HomeComponent} from './home.component';
import {HomeRouteModule} from './home.routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRouteModule],
})
export class HomeModule {}
