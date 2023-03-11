import {ChangeDetectionStrategy, Component} from '@angular/core';

import {ProblemTable} from '@opres/shared/types';

@Component({
  selector: 'app-reduce-tab',
  templateUrl: './reduce.tab.template.html',
  styleUrls: ['../tabs.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReduceTabComponent {
  public onFormOutput(table: ProblemTable): void {
    // ...
  }
}
