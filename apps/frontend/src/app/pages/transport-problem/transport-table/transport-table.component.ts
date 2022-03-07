import {ChangeDetectionStrategy, Component} from '@angular/core';

import {BehaviorSubject} from 'rxjs';
import {map, tap} from 'rxjs/operators';

import {TransportTableService} from './transport-table.service';

type TransportTable = Array<{[key: string]: number | undefined}>;

@Component({
  selector: 'transport-table',
  templateUrl: './transport-table.template.html',
  styleUrls: ['./transport-table.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportTableComponent {
  public costSource = new BehaviorSubject<TransportTable>([]);
  public costRowDefinitions = new BehaviorSubject<Array<string>>([]);

  constructor(private transportTableService: TransportTableService) {
    this.transportTableService.sizeChanges
      .pipe(
        map(({shops, storages}) => ({
          rowDefinitions: this.rowDefinitionsFrom(shops),
          storages,
        })),
        map(({rowDefinitions, storages}) => {
          this.costRowDefinitions.next(rowDefinitions);
          return this.tableSourceFrom(storages, rowDefinitions);
        }),
        tap((costSource) => this.costSource.next(costSource)),
      )
      .subscribe();
  }

  private tableSourceFrom(
    length: number,
    rowDefinitions: Array<string>,
  ): TransportTable {
    const rowContent = rowDefinitions.reduce(
      (acc, curr) => ({...acc, [curr]: undefined}),
      {},
    );
    return Array.from({length}, () => rowContent);
  }

  private rowDefinitionsFrom = (length: number): Array<string> =>
    Array.from({length}, (_, index) => `${index}`);
}
