import {Pipe, PipeTransform} from '@angular/core';

import {SelectedCell} from '@opres/shared/types';

@Pipe({
  name: 'emptySelectedValues',
})
export class EmptySelectedValuesPipe implements PipeTransform {
  public transform(value?: Array<SelectedCell>): Array<SelectedCell> | undefined {
    if (!value) return;
    return value.map((cell) => ({...cell, value: undefined}));
  }
}
