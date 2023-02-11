import {AfterViewInit, ChangeDetectionStrategy, Component, Input, ViewChild} from '@angular/core';
import {MatTabGroup} from '@angular/material/tabs';

import {ReduceResponse} from '@opres/shared/types';

@Component({
  selector: 'app-reduce-result',
  templateUrl: './reduce-result.template.html',
  styleUrls: ['../results.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReduceResultComponent implements AfterViewInit {
  @Input() value!: ReduceResponse;
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
