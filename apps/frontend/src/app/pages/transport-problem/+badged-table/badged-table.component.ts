import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {RowDefs} from '@opres/generatable-tables';
import {TransportTable} from '@opres/shared-interfaces';

@Component({
  selector: '+badged-table[tableSource]',
  templateUrl: './badged-table.template.html',
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
export class BadgedTableComponent {
  @Input() tableSource: TransportTable = [];

  public get rowDefinitions(): RowDefs {
    return Object.keys(this.tableSource[0] || []);
  }
}
