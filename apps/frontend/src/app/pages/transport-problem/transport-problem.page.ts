import {ChangeDetectionStrategy, Component} from '@angular/core';

import {UntilDestroy} from '@ngneat/until-destroy';

interface Tab {
  label: string;
  link: string;
}

@UntilDestroy()
@Component({
  selector: 'transport-problem-page',
  templateUrl: './transport-problem.template.html',
  styles: [
    `
      .tab-content-wrapper {
        padding: 8px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportProblemPageComponent {
  public readonly tabs: Array<Tab> = [
    {label: 'All', link: 'all'},
    {label: 'Second phase only', link: 'second-phase'},
    {label: 'Epsilon only', link: 'epsilon'},
  ];
}
