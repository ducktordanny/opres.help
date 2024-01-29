import {Pipe, SecurityContext} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {PipeTransform} from '@nestjs/common';

import {marked} from 'marked';

@Pipe({
  name: 'mdPreview',
})
export class MdPreviewPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  public transform(value: string | null): string {
    if (value === null) {
      console.error('mdPreview input value is null');
      return '';
    }
    const rawPreview = marked.parse(value);
    const preview = this.sanitizer.sanitize(SecurityContext.HTML, rawPreview);
    if (preview === null) console.error('Cannot display HTML content because of security reasons.');
    return preview ?? '';
  }
}
