import {ChangeDetectionStrategy, Component} from '@angular/core';

import {InputTableService} from '@components/input-table/input-table.service';
import {Table} from '@shared/types/table.types';

import {TransportProblemService} from '../transport-problem.service';
import {Demands, Stocks} from '../transport-table.types';

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
