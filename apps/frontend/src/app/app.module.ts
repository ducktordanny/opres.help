import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {LayoutComponent} from '@components/layout/layout.component';
import {NavbarModule} from '@components/navbar/navbar.module';

import {AppComponent} from './app.component';
import {AppRouting} from './app.routing';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [BrowserAnimationsModule, BrowserModule, NavbarModule, AppRouting],
  bootstrap: [AppComponent],
})
export class AppModule {}
