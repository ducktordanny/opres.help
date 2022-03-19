import {ChangeDetectionStrategy, Component} from '@angular/core';

import {Table} from '@components/input-table/input-table.component';
import {InputTableService} from '@components/input-table/input-table.service';

import {TransportTableService} from './transport-table.service';

@Component({
  selector: 'transport-table',
  templateUrl: './transport-table.template.html',
  styleUrls: ['./transport-table.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportTableComponent {
  public readonly shops$ = this.transportTableService.shops;
  public readonly storages$ = this.transportTableService.storages;

  constructor(
    private transportTableService: TransportTableService,
    private inputTableService: InputTableService,
  ) {}

  public test(event: Table): void {
    // calculation will be called here...
  }

  public clearTable(): void {
    this.inputTableService.clear(['costs', 'storageStocks', 'shopDemands']);
  }
}
