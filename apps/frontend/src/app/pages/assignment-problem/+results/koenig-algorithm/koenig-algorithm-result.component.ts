import {AfterViewInit, ChangeDetectionStrategy, Component, Input, ViewChild} from '@angular/core';
import {MatTabGroup} from '@angular/material/tabs';

import {KoenigAlgoResponse, ProblemTable} from '@opres/shared/types';

export const TABLE_SIGNS = {
  reachedRows: '+',
  targetColumns: '?',
  verifiedLines: '*',
};

@Component({
  selector: 'app-koenig-algorithm-result',
  templateUrl: './koenig-algorithm-result.template.html',
  styleUrls: ['../results.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KoenigAlgorithmResultComponent implements AfterViewInit {
  @Input() sourceTable!: ProblemTable;
  @Input() result!: KoenigAlgoResponse;
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
