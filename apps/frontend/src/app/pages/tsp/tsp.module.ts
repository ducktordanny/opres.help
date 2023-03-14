import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

import {TranslateModule} from '@ngx-translate/core';

import {TspPageComponent} from './tsp.page';
import {TspRouting} from './tsp.routing';

@NgModule({
  declarations: [TspPageComponent],
  imports: [CommonModule, MatTabsModule, TspRouting, TranslateModule],
})
export class TspModule {}
