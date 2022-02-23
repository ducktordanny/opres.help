import {Injectable} from '@angular/core';

import {BehaviorSubject} from 'rxjs';

type TableSize = {shops: number; storages: number};

@Injectable()
export class TransportTableService {
  /**
   * One shop is the equivalent of a column
   * and a storage is the equivalent of a row.
   * */
  public tableSize = new BehaviorSubject<TableSize>({
    shops: 6,
    storages: 5,
  });
}
