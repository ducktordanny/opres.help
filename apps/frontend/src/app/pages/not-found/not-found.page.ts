import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'not-found-page',
  template: ` <p>404. Page Not Found</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPageComponent {}
