import {Injectable} from '@angular/core';

import {BehaviorSubject, combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';

export type TableSize = {shops: number; storages: number};

@Injectable()
export class TransportTableService {
  /** A shop is the equivalent of a column. */
  public shops = new BehaviorSubject<number>(4);
  /** A storage is the equivalent of a row. */
  public storages = new BehaviorSubject<number>(4);

  /** Changes the number of shops (columns). */
  public setShops(count: number): void {
    this.shops.next(count);
  }

  /** Changes the number of storages (rows). */
  public setStorages(count: number): void {
    this.storages.next(count);
  }
}
