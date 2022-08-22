import {NgModule} from '@angular/core';

import {SanitizeHtmlPipe} from '@frontend/pipes/sanitize-html/sanitize-html.pipe';

@NgModule({
  declarations: [SanitizeHtmlPipe],
  exports: [SanitizeHtmlPipe],
})
export class SanitizeHtmlModule {}
