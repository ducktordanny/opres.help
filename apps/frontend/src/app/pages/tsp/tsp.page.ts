import {ChangeDetectionStrategy, Component} from '@angular/core';

import {Tab} from '../../types/routing.type';

@Component({
  selector: 'app-tsp-page',
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
export class TspPageComponent {
  public readonly tabs: Array<Tab> = [
    {label: 'TSP.TABS.BNB-METHOD.NAME', link: 'bnb-method'},
    {label: 'TSP.TABS.REDUCE.NAME', link: 'reduce'},
  ];
}
