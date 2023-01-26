import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-all-tab',
  templateUrl: './all.tab.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllTabComponent {}
