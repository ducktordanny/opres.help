import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {Table} from '@opres/shared/types';

@Component({
  selector: 'opres-table[tableSource]',
  templateUrl: './table.template.html',
  styles: [
    `
      td {
        width: 50px;
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
  @Input() tableSource!: Table;
  @Input() badgeSource?: Table;
  @Input() showZeros = true;
}
