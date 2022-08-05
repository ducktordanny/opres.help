import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'second-phase-tab',
  templateUrl: './second-phase.tab.template.html',
  styleUrls: ['../tabs.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondPhaseTabComponent {}
