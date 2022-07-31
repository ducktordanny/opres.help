import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'epsilon-tab',
  templateUrl: './epsilon.tab.template.html',
  styleUrls: ['../tabs.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpsilonTabComponent {}
