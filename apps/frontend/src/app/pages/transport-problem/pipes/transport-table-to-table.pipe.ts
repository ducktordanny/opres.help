import {Pipe, PipeTransform} from '@angular/core';

import {ProblemTable, TransportTable} from '@opres/shared/types';
import {mapValues} from 'lodash';

@Pipe({
  name: 'transportTableToTable',
})
export class TransportTableToTablePipe implements PipeTransform {
  public transform(value: TransportTable, cellKey: string = 'transported'): ProblemTable {
    return value.map((row) => mapValues(row, cellKey));
  }
}
