import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import {MatTabGroup} from '@angular/material/tabs';

import {FirstPhaseResult} from '../../transport-problem.service';

@Component({
  selector: 'first-phase-steps[firstPhaseResult]',
  templateUrl: './first-phase-steps.template.html',
  styleUrls: ['./first-phase-steps.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstPhaseStepsComponent implements AfterViewInit {
  @Input() public firstPhaseResult: FirstPhaseResult | undefined;
  @ViewChild('matTabGroup', {static: true}) public matTabGroup:
    | MatTabGroup
    | undefined;

  public ngAfterViewInit(): void {
    this.setMatTabGroupHeight();
  }

  public onSelectedTabChange(): void {
    this.setMatTabGroupHeight();
  }

  private setMatTabGroupHeight(): void {
    const ntvEl = this.matTabGroup?._elementRef?.nativeElement;
    ntvEl.style.minHeight = ntvEl?.clientHeight + 'px';
  }
}
