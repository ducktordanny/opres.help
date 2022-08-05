import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {Table} from '@opres/shared/types';

@Component({
  selector: 'opres-simple-table[tableSource]',
  templateUrl: './simple-table.template.html',
  styles: [
    `
      td {
        width: 50px;
        text-align: center;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleTableComponent {
  @Input() tableSource: Table = [];

  public get rowDefinitions() {
    return Object.keys(this.tableSource[0] || []);
  }
}
