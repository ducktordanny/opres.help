import {Pipe, PipeTransform} from '@angular/core';

import {ProblemRow, ProblemTable} from '@opres/shared/types';

@Pipe({
  name: 'arrayToTableRow',
})
export class ArrayToTableRowPipe implements PipeTransform {
  public transform(value: Array<number | null> | undefined): ProblemTable {
    if (!value) return [];
    return [value.reduce((acc, curr, index) => ({...acc, [`${index}`]: curr}), {} as ProblemRow)];
  }
}
