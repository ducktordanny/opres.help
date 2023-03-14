import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {BnbResult, ProblemTable} from '@opres/shared/types';
import {Observable, Subject} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Cacheable} from 'ts-cacheable';

import {ErrorHandlerService} from '../../services/error-handler.service';

export const tspCacheBuster = new Subject<void>();

@Injectable()
export class TspService {
  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) {}

  @Cacheable({cacheBusterObserver: tspCacheBuster})
  public bnbMethod(table: ProblemTable): Observable<BnbResult> {
    return this.http
      .post<BnbResult>(this.urlPrefix('bnb'), table)
      .pipe(catchError(this.errorHandler.showError));
  }

  @Cacheable({cacheBusterObserver: tspCacheBuster})
  public reduce(table: ProblemTable): Observable<ProblemTable> {
    return this.http
      .post<ProblemTable>(this.urlPrefix('reduce'), table)
      .pipe(catchError(this.errorHandler.showError));
  }

  private urlPrefix = (path?: string) => `/api/tsp/${path || ''}`;
}
