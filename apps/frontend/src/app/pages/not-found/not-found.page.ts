import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'not-found-page',
  template: `
    <h1>Ooops...</h1>
    <img
      class="not-found-icon"
      src="../../../assets/icons/not-found.icon.svg"
      alt="Not Found Icon"
    />
  `,
  styleUrls: ['./not-found.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPageComponent {}
