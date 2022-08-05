import {Pipe, PipeTransform} from '@angular/core';

import {Stocks, Table} from '@opres/shared/types';

@Pipe({
  name: 'stocksToTable',
})
export class StocksToTablePipe implements PipeTransform {
  public transform(value: Stocks | undefined): Table {
    if (!value) return [];
    return value.map((stock) => ({'0': stock || 0}));
  }
}
