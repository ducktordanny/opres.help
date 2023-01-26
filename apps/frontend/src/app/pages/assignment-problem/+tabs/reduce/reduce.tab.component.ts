import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.tab.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReduceTabComponent {}
