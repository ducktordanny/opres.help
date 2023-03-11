import {NgModule} from '@angular/core';

import {TspRouting} from './tsp.routing';
import {TspPageComponent} from './tsp-page.page';

@NgModule({
  declarations: [TspPageComponent],
  imports: [TspRouting],
})
export class TspModule {}
