import {NgModule} from '@angular/core';

import {UiTreeModule} from '@opres/ui/tree';

import {TspRouting} from './tsp.routing';
import {TspPageComponent} from './tsp-page.page';

@NgModule({
  declarations: [TspPageComponent],
  imports: [TspRouting, UiTreeModule],
})
export class TspModule {}
