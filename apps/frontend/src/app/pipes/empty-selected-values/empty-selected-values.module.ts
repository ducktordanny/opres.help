import {NgModule} from '@angular/core';

import {EmptySelectedValuesPipe} from '@frontend/pipes/empty-selected-values/empty-selected-values.pipe';

@NgModule({
  declarations: [EmptySelectedValuesPipe],
  exports: [EmptySelectedValuesPipe],
})
export class EmptySelectedValuesModule {}
