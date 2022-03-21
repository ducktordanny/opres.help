import {ChangeDetectionStrategy, Component} from '@angular/core';

import {InputTableService} from '@components/input-table/input-table.service';
import {Table} from '@shared/types/table.types';
import {BehaviorSubject} from 'rxjs';

import {
  Demands,
  Stocks,
  TransportProblemService,
} from '../transport-problem.service';

@Component({
  selector: 'transport-table',
  templateUrl: './transport-table.template.html',
  styleUrls: ['./transport-table.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportTableComponent {
  public readonly shops$ = this.transportProblemService.shops$;
  public readonly storages$ = this.transportProblemService.storages$;
  private costTable = new BehaviorSubject<Table>([]);
  private shopDemands = new BehaviorSubject<Demands>([]);
  private storageStocks = new BehaviorSubject<Stocks>([]);

  constructor(
    private transportProblemService: TransportProblemService,
    private inputTableService: InputTableService,
  ) {}

  public clearTables(): void {
    this.inputTableService.clear(['costs', 'storageStocks', 'shopDemands']);
  }

  public calculate(event: Event): void {
    event.preventDefault();
    console.log('COSTS', this.costTable.getValue());
    console.log('SHOPS', this.shopDemands.getValue());
    console.log('STORAGES', this.storageStocks.getValue());
  }

  public onCostChange(values: Table): void {
    this.costTable.next(values);
  }

  public onShopChange(values: Table): void {
    const arrayOfValues = Object.values(values[0]) as Demands;
    this.shopDemands.next(arrayOfValues);
  }

  public onStorageChange(values: Table): void {
    const arrayOfValues = values.map((value) => value['0']) as Stocks;
    this.storageStocks.next(arrayOfValues);
  }
}
