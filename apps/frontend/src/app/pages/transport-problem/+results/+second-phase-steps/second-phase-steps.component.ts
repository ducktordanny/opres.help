import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'second-phase-steps',
  templateUrl: './second-phase-steps.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondPhaseStepsComponent {}
