import {ChangeDetectionStrategy, Component} from '@angular/core';

import {UntilDestroy} from '@ngneat/until-destroy';

import {Tab} from '../../types/routing.type';

@UntilDestroy()
@Component({
  selector: 'transport-problem-page',
  templateUrl: './transport-problem.template.html',
  styles: [
    `
      .tab-content-wrapper {
        padding: 8px calc(env(safe-area-inset-right) + 8px) 8px 8px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportProblemPageComponent {
  public readonly tabs: Array<Tab> = [
    {label: 'TRANSPORTATION_PROBLEM.TABS.ALL.NAME', link: 'all'},
    {
      label: 'TRANSPORTATION_PROBLEM.TABS.SECOND_PHASE.NAME',
      link: 'second-phase',
    },
    {label: 'TRANSPORTATION_PROBLEM.TABS.EPSILON.NAME', link: 'epsilon'},
  ];
}
