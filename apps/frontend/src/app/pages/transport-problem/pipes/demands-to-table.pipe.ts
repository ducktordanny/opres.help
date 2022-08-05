import {Pipe, PipeTransform} from '@angular/core';

import {Demands, Row, Table} from '@opres/shared/types';

@Pipe({
  name: 'demandsToTable',
})
export class DemandsToTablePipe implements PipeTransform {
  public transform(value: Demands | undefined): Table {
    if (!value) return [];
    return [
      value.reduce(
        (acc, curr, index) => ({...acc, [`${index}`]: curr || 0}),
        {} as Row,
      ),
    ];
  }
}
