import {Pipe, PipeTransform} from '@angular/core';

import {Row, Table} from '@opres/shared/types';

@Pipe({
  name: 'arrayToTable',
})
export class ArrayToTablePipe implements PipeTransform {
  public transform(value: Array<number | null> | undefined): Table {
    if (!value) return [];
    return [
      value.reduce(
        (acc, curr, index) => ({...acc, [`${index}`]: curr}),
        {} as Row,
      ),
    ];
  }
}
