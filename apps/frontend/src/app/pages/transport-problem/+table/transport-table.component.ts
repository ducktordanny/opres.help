import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

import {ProblemTable} from '@opres/shared/types';
import {Demands, Stocks} from '@opres/shared/types';
import {InputTableService} from '@opres/ui/tables';

@Component({
  selector: 'transport-table',
  templateUrl: './transport-table.template.html',
  styles: [
    `
      :host {
        padding: 8px;
        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: auto auto;
        gap: 8px;
        justify-content: start;
        overflow-x: auto;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportTableComponent {
  @Input() public shopsCount = 4;
  @Input() public storagesCount = 4;

  @Output() public tableClear = new EventEmitter<void>();
  @Output() public costChange = new EventEmitter<ProblemTable>();
  @Output() public demandChange = new EventEmitter<Demands>();
  @Output() public stockChange = new EventEmitter<Stocks>();

  public mockCosts: ProblemTable = [
    {'0': 8, '1': 7, '2': 3, '3': 2},
    {'0': 1, '1': 4, '2': 2, '3': 5},
    {'0': 2, '1': 3, '2': 4, '3': 7},
    {'0': 1, '1': 1, '2': 4, '3': 4},
  ];
  public mockDemands: ProblemTable = [{'0': 18, '1': 32, '2': 35, '3': 20}];
  public mockStocks: ProblemTable = [{'0': 15}, {'0': 43}, {'0': 28}, {'0': 19}];

  constructor(private inputTableService: InputTableService) {}

  public onCostChange(values: ProblemTable): void {
    this.costChange.emit(values);
  }

  public onDemandChange(values: ProblemTable): void {
    // convert Table to Demands
    const arrayOfDemandValues = Object.values(values[0]) as Demands;
    this.demandChange.emit(arrayOfDemandValues);
  }

  public onStockChange(values: ProblemTable): void {
    // convert Table to Stocks
    const arrayOfStockValues = values.map((value) => value['0']) as Stocks;
    this.stockChange.emit(arrayOfStockValues);
  }

  public onTablesClear(): void {
    this.inputTableService.clear(['costs', 'storageStocks', 'shopDemands']);
    this.tableClear.emit();
  }
}
