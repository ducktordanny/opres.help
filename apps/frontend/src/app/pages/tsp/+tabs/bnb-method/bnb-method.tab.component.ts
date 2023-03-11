import {ChangeDetectionStrategy, Component} from '@angular/core';

import {ProblemTable} from '@opres/shared/types';

@Component({
  selector: 'app-bnb-method-tab',
  templateUrl: './bnb-method.tab.template.html',
  styleUrls: ['../tabs.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BnbMethodTabComponent {
  public onFormOutput(table: ProblemTable): void {
    // ...
  }
}
