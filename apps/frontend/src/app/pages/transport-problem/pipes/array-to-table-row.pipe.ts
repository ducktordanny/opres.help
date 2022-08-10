import {Pipe, PipeTransform} from '@angular/core';

import {Table} from '@opres/shared/types';

@Pipe({
  name: 'arrayToTableRow',
})
export class ArrayToTableRowPipe implements PipeTransform {
  public transform(value: Array<number | null> | undefined): Table {
    if (!value) return [];
    return value.map((stock) => ({'0': stock}));
  }
}
