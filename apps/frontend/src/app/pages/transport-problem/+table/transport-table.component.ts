import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

import {InputTableService} from '@components/input-table/input-table.service';
import {Table} from '@shared/types/table.types';

import {TransportProblemService} from '../transport-problem.service';
import {Demands, Stocks} from '../transport-problem.types';

@Component({
  selector: 'transport-table',
  templateUrl: './transport-table.template.html',
  styles: [
    `
      .input-table-wrapper {
        padding: 8px;
        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: auto auto;
        gap: 16px;
        justify-content: start;
        overflow-x: auto;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportTableComponent {
  @Output() tableClear = new EventEmitter<void>();
  public readonly shops$ = this.transportProblemService.shops$;
  public readonly storages$ = this.transportProblemService.storages$;

  public mockCosts: Table = [
    {'0': 8, '1': 7, '2': 3, '3': 2},
    {'0': 1, '1': 4, '2': 2, '3': 5},
    {'0': 2, '1': 3, '2': 4, '3': 7},
    {'0': 1, '1': 1, '2': 4, '3': 4},
  ];
  public mockDemands: Table = [{'0': 18, '1': 32, '2': 35, '3': 20}];
  public mockStocks: Table = [{'0': 15}, {'0': 43}, {'0': 28}, {'0': 19}];

  constructor(
    private transportProblemService: TransportProblemService,
    private inputTableService: InputTableService,
  ) {}

  public clearTables(): void {
    this.inputTableService.clear(['costs', 'storageStocks', 'shopDemands']);
    this.tableClear.emit();
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
