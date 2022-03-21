import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

import {InputTableService} from '@components/input-table/input-table.service';
import {Table} from '@shared/types/table.types';

import {
  Demands,
  Stocks,
  TPData,
  TransportProblemService,
} from '../transport-problem.service';

@Component({
  selector: 'transport-table',
  templateUrl: './transport-table.template.html',
  styleUrls: ['./transport-table.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportTableComponent {
  @Output() tableChange = new EventEmitter<TPData>();
  public readonly shops$ = this.transportProblemService.shops$;
  public readonly storages$ = this.transportProblemService.storages$;

  constructor(
    private transportProblemService: TransportProblemService,
    private inputTableService: InputTableService,
  ) {}

  public clearTables(): void {
    this.inputTableService.clear(['costs', 'storageStocks', 'shopDemands']);
  }

  public onCostChange(values: Table): void {
    this.transportProblemService.setCosts(values);
  }

  public onShopChange(values: Table): void {
    const arrayOfValues = Object.values(values[0]) as Demands;
    this.transportProblemService.setShopDemands(arrayOfValues);
  }

  public onStorageChange(values: Table): void {
    const arrayOfValues = values.map((value) => value['0']) as Stocks;
    this.transportProblemService.setStorageStocks(arrayOfValues);
  }
}
