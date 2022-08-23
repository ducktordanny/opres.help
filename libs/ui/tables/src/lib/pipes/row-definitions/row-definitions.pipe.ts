import {Pipe, PipeTransform} from '@angular/core';

import {RowDefs} from '@opres/shared/types';

type TableRow = Record<string, unknown>;

@Pipe({
  name: 'toRowDefinitions',
})
export class RowDefinitionsPipe implements PipeTransform {
  public transform(value?: TableRow): RowDefs {
    if (!value) return [];
    return Object.keys(value);
  }
}
