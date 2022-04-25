import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {LayoutModule} from '@components/layout/layout.module';

import {AppComponent} from './app.component';
import {AppRouting} from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRouting, BrowserAnimationsModule, BrowserModule, LayoutModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
