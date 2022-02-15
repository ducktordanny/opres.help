import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

import {NavbarComponent} from './navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [MatButtonModule, MatIconModule, MatToolbarModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
