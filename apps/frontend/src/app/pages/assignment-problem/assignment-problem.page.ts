import {ChangeDetectionStrategy, Component} from '@angular/core';

import {Tab} from '../../types/routing.type';

@Component({
  selector: 'assignment-problem-page',
  templateUrl: './assignment-problem.template.html',
  styles: [
    `
      .tab-content-wrapper {
        padding: 8px calc(env(safe-area-inset-right) + 8px) 8px 8px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssignmentProblemPageComponent {
  public readonly tabs: Array<Tab> = [
    {label: 'ASSIGNMENT_PROBLEM.TABS.ALL.NAME', link: 'all'},
    {
      label: 'ASSIGNMENT_PROBLEM.TABS.KOENIG_ALGORITHM.NAME',
      link: 'koenig-algorithm',
    },
    {label: 'ASSIGNMENT_PROBLEM.TABS.INDEPENDENT_ZEROS.NAME', link: 'independent-zeros'},
    {label: 'ASSIGNMENT_PROBLEM.TABS.REDUCE.NAME', link: 'reduce'},
  ];
}
