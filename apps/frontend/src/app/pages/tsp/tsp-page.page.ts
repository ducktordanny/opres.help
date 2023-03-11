import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'tsp-page',
  templateUrl: './tsp.template.html',
  styles: [
    `
      .tab-content-wrapper {
        padding: 8px calc(env(safe-area-inset-right) + 8px) 8px 8px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TspPageComponent {}
