import {NgModule} from '@angular/core';

import {RowDefinitionsPipe} from './row-definitions.pipe';

@NgModule({
  declarations: [RowDefinitionsPipe],
  exports: [RowDefinitionsPipe],
})
export class RowDefinitionsModule {}
