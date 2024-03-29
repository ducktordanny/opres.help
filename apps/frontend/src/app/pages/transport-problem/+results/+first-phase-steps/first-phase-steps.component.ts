import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import {MatTabGroup} from '@angular/material/tabs';

import {Language} from '@frontend/components/layout/language-switcher/language-switcher.service';

import {FirstPhaseResult} from '../../transport-problem.service';

@Component({
  selector: 'first-phase-steps[firstPhaseResult][language]',
  templateUrl: './first-phase-steps.template.html',
  styleUrls: ['./first-phase-steps.style.scss', '../results.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstPhaseStepsComponent implements AfterViewInit {
  @Input() public firstPhaseResult: FirstPhaseResult | undefined;
  @Input() public language!: Language | null;
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
