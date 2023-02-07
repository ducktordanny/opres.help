import {AfterViewInit, ChangeDetectionStrategy, Component, Input, ViewChild} from '@angular/core';
import {MatTabGroup} from '@angular/material/tabs';

import {HungarianMethodTransformation, ProblemTable} from '@opres/shared/types';

@Component({
  selector: 'app-hungarian-method-result',
  templateUrl: './hungarian-method.template.html',
  styleUrls: ['../results.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HungarianMethodComponent implements AfterViewInit {
  @Input() public sourceTable!: ProblemTable;
  @Input() public value!: HungarianMethodTransformation;
  @ViewChild('matTabGroup', {static: true}) public matTabGroup: MatTabGroup | undefined;

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
