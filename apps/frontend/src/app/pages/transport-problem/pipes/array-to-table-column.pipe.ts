import {Pipe, PipeTransform} from '@angular/core';

import {ProblemTable} from '@opres/shared/types';

@Pipe({
  name: 'arrayToTableColumn',
})
export class ArrayToTableColumnPipe implements PipeTransform {
  public transform(value: Array<number | null> | undefined, columnKey: string = '0'): ProblemTable {
    if (!value) return [];
    return value.map((stock) => ({[columnKey]: stock}));
  }
}
