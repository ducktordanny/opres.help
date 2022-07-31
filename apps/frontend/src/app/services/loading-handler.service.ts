import {Injectable} from '@angular/core';

import {BehaviorSubject, Observable, of} from 'rxjs';
import {delay, switchMap} from 'rxjs/operators';

@Injectable()
export class LoadingHandlerService {
  private _isLoading$ = new BehaviorSubject(false);

  public get isLoading(): Observable<boolean> {
    return this._isLoading$.pipe(
      switchMap((isLoading) => {
        if (!isLoading) return of(false);
        return of(true).pipe(delay(500));
      }),
    );
  }

  public start(): void {
    this._isLoading$.next(true);
  }

  public stop(): void {
    this._isLoading$.next(false);
  }
}
