import {NgModule} from '@angular/core';

import {ObjectSizePipe} from '@frontend/pipes/object-size/object-size.pipe';

@NgModule({
  declarations: [ObjectSizePipe],
  exports: [ObjectSizePipe],
})
export class ObjectSizeModule {}
