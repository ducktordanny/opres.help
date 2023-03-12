import {AfterViewInit, ChangeDetectionStrategy, Component, Input, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatTabGroup} from '@angular/material/tabs';

import {BnbBestPath, BnbSteps, ProblemTable} from '@opres/shared/types';

import {BnbTreeInfoDialogComponent} from './bnb-tree-info.dialog.component';

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

  constructor(private dialog: MatDialog) {}

  public ngAfterViewInit(): void {
    this.setMatTabGroupHeight();
  }

  public onSelectedTabChange(): void {
    this.setMatTabGroupHeight();
  }

  public onHelp(): void {
    this.dialog.open(BnbTreeInfoDialogComponent);
  }

  private setMatTabGroupHeight(): void {
    const ntvEl = this.matTabGroup?._elementRef?.nativeElement;
    if (ntvEl?.style?.minHeight) ntvEl.style.minHeight = ntvEl?.clientHeight + 'px';
  }
}
