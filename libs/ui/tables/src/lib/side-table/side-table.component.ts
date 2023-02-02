import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {SideTable, SideTableType, SideTableValuesByIndex} from '@opres/shared/types';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {rowDefinitionsFrom, tableSourceFrom} from '../table.helper';

@Component({
  selector: 'opres-side-table[type][size]',
  templateUrl: './side-table.template.html',
  styleUrls: ['./side-table.style.scss', '../tables.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideTableComponent {
  @Input() public valuesByIndex?: SideTableValuesByIndex;
  public type$ = new BehaviorSubject<SideTableType>('row');
  public size$ = new BehaviorSubject<number>(4);
  public tableSource$: Observable<SideTable>;

  @Input() public set type(value: SideTableType) {
    this.type$.next(value);
  }
  @Input() public set size(value: number) {
    this.size$.next(value);
  }

  constructor() {
    this.tableSource$ = combineLatest([this.type$, this.size$]).pipe(
      map(([type, size]) => {
        let rows = 1,
          columns = 1;
        if (type === 'row') columns = size;
        else if (type === 'column') rows = size;
        return {rows, columns};
      }),
      map(({rows, columns}) => {
        const rowDefinitions = rowDefinitionsFrom(columns);
        return tableSourceFrom(rows, rowDefinitions) as SideTable;
      }),
    );
  }
}
