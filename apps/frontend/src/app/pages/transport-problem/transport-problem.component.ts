import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSelectChange} from '@angular/material/select';

import {TransportTableService} from './transport-table/transport-table.service';
import {CostTable, TransportProblemService} from './transport-problem.service';

type ResultValue = {table: CostTable; epsilon: number} | null;

@Component({
  selector: 'transport-problem-page',
  templateUrl: './transport-problem.template.html',
  styleUrls: ['./transport-problem.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportProblemComponent {
  resultShouldBe = 0;
  currentResult: ResultValue = null;

  constructor(
    private transportTableService: TransportTableService,
    private transportProblemService: TransportProblemService,
  ) {}

  public onShopsCountChange(change: MatSelectChange): void {
    this.transportTableService.setShops(change.value);
  }

  public onStoragesCountChange(change: MatSelectChange): void {
    this.transportTableService.setStorages(change.value);
  }
}
