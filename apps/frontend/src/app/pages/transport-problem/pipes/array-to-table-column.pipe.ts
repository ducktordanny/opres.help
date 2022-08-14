import {Pipe, PipeTransform} from '@angular/core';

import {Table} from '@opres/shared/types';

@Pipe({
  name: 'arrayToTableColumn',
})
export class ArrayToTableColumnPipe implements PipeTransform {
  public transform(
    value: Array<number | null> | undefined,
    columnKey: string = '0',
  ): Table {
    if (!value) return [];
    return value.map((stock) => ({[columnKey]: stock}));
  }
}
