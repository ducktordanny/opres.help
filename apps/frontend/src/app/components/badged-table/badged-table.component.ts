import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {RowDefs} from '@shared/types/table.types';

import {TransportTable} from '../../pages/transport-problem/transport-problem.types';

@Component({
  selector: 'badged-table[tableSource]',
  templateUrl: './badged-table.template.html',
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
export class BadgedTableComponent {
  @Input() tableSource: TransportTable = [];

  public get rowDefinitions(): RowDefs {
    return Object.keys(this.tableSource[0] || []);
  }
}
