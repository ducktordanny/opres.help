import {Injectable} from '@angular/core';

import {Observable, Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class InputTableService {
  private clearTrigger = new Subject<Array<string>>();

  /** Emits if a .clear([keys]) is called somewhere. */
  public get clear$(): Observable<Array<string>> {
    return this.clearTrigger.asObservable();
  }

  /** Clears inputs of tables with the given key(s). */
  public clear(key: string | Array<string>): void {
    if (Array.isArray(key)) this.clearTrigger.next(key);
    else this.clearTrigger.next([key]);
  }
}
