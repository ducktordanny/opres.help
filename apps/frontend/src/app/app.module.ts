import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {LayoutComponent} from '@components/layout/layout.component';
import {NavbarModule} from '@components/navbar/navbar.module';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing.module';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    NavbarModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
