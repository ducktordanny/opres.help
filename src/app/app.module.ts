import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {LayoutComponent} from './components/layout/layout.component';
import {NavbarModule} from './components/navbar/navbar.module';
import {HomeModule} from './pages/home/home.module';
import {TransportProblemModule} from './pages/transport-problem/transport-problem.module';
import {AppComponent} from './app.component';
import {RoutingModule} from './routing.module';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    HomeModule,
    NavbarModule,
    RoutingModule,
    TransportProblemModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
