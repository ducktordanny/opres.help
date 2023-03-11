import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-reduce-tab',
  templateUrl: './reduce.tab.template.html',
  styleUrls: ['../tabs.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReduceTabComponent {}
