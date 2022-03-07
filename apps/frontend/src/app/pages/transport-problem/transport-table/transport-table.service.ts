import {Injectable} from '@angular/core';

import {BehaviorSubject, combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';

export type TableSize = {shops: number; storages: number};

@Injectable()
export class TransportTableService {
  private shops = new BehaviorSubject<number>(4);
  private storages = new BehaviorSubject<number>(4);

  /**
   * One shop is the equivalent of a column and a storage is the equivalent of a row.
   * */
  public readonly sizeChanges = combineLatest([this.shops, this.storages]).pipe(
    map(([shops, storages]) => ({shops, storages})),
  );

  /** Changes the number of shops (columns). */
  public setShops(count: number): void {
    this.shops.next(count);
  }

  /** Changes the number of storages (rows). */
  public setStorages(count: number): void {
    this.storages.next(count);
  }
}
