import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {Table} from '@opres/shared/types';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'opres-table[tableSource]',
  templateUrl: './table.template.html',
  styles: [
    `
      td {
        min-width: 50px;
        text-align: center;
      }

      .hidden-transport {
        color: transparent;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  public tableSource$ = new Observable<Table>();
  public badgeSource$ = new Observable<Table>();
  public secondaryBadgeSource$ = new Observable<Table>();
  @Input() public showZeros = true;

  @Input() public set tableSource(value: Observable<Table> | Table) {
    if (Array.isArray(value)) this.tableSource$ = of(value);
    else this.tableSource$ = value;
  }

  @Input() public set badgeSource(value: Observable<Table> | Table) {
    if (Array.isArray(value)) this.badgeSource$ = of(value);
    else this.badgeSource$ = value;
  }

  @Input() public set secondaryBadgeSource(value: Observable<Table> | Table) {
    if (Array.isArray(value)) this.secondaryBadgeSource$ = of(value);
    else this.secondaryBadgeSource = value;
  }
}
