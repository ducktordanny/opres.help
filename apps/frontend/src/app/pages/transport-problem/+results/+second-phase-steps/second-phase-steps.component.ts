import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import {MatTabGroup} from '@angular/material/tabs';

import {Language} from '@frontend/components/layout/language-switcher/language-switcher.service';

import {SecondPhaseResult} from '../../transport-problem.service';

@Component({
  selector: 'second-phase-steps[secondPhaseResult][language]',
  templateUrl: './second-phase-steps.template.html',
  styleUrls: ['./second-phase-steps.style.scss', '../results.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondPhaseStepsComponent implements AfterViewInit {
  @Input() public secondPhaseResult: SecondPhaseResult | undefined;
  @Input() public language!: Language | null;
  @ViewChild('matTabGroup', {static: true}) public matTabGroup:
    | MatTabGroup
    | undefined;
  public readonly explanationTranslateKeys = [
    'SIDE_TABLES',
    'ORANGE_BADGES',
    'ORANGE_NUMBERS_LEFT',
    'ORANGE_BORDERED_CELL',
  ];

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
