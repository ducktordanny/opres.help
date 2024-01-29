import {NgModule} from '@angular/core';

import {MdPreviewPipe} from './md-preview.pipe';

@NgModule({
  declarations: [MdPreviewPipe],
  exports: [MdPreviewPipe],
})
export class MdPreviewModule {}
