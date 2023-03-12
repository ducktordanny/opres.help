import {AfterViewInit, ChangeDetectionStrategy, Component, Input, ViewChild} from '@angular/core';
import {MatTabGroup} from '@angular/material/tabs';

import {BnbBestPath, BnbSteps, ProblemTable} from '@opres/shared/types';

@Component({
  selector: 'app-tsp-bnb-method-result[steps][result][originalTable]',
  templateUrl: './bnb-method-result.template.html',
  styleUrls: ['../results.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BnbMethodResultComponent implements AfterViewInit {
  @Input() steps!: BnbSteps;
  @Input() result!: BnbBestPath;
  @Input() originalTable!: ProblemTable;
  @ViewChild('matTabGroup', {static: true}) public matTabGroup: MatTabGroup | undefined;

  public ngAfterViewInit(): void {
    this.setMatTabGroupHeight();
  }

  public onSelectedTabChange(): void {
    this.setMatTabGroupHeight();
  }

  private setMatTabGroupHeight(): void {
    const ntvEl = this.matTabGroup?._elementRef?.nativeElement;
    if (ntvEl?.style?.minHeight) ntvEl.style.minHeight = ntvEl?.clientHeight + 'px';
  }
}
