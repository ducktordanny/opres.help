import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {
  AssignmentProblemType,
  HungarianMethodResponse,
  KoenigAlgoResponse,
  ReduceResponse,
  SelectedCell,
  Table,
  ZeroFindingMethod,
} from '@opres/shared/types';
import {ErrorHandlerService} from '@frontend/services/error-handler.service';
import {catchError, Observable, Subject} from 'rxjs';
import {Cacheable} from 'ts-cacheable';

const assignmentProblemCacheBuster = new Subject<void>();

@Injectable()
export class AssignmentProblemService {
  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) {}

  @Cacheable({cacheBusterObserver: assignmentProblemCacheBuster})
  public calculateAll(
    assignmentTable: Table,
    problemType = AssignmentProblemType.Min,
    method = ZeroFindingMethod.Greedy,
  ): Observable<HungarianMethodResponse> {
    const params = new HttpParams().set('zero-finding-method', method).set('type', problemType);

    return this.http
      .post<HungarianMethodResponse>(this.urlPrefix(), assignmentTable, {params})
      .pipe(catchError(this.errorHandler.showError));
  }

  @Cacheable({cacheBusterObserver: assignmentProblemCacheBuster})
  public calculateKoenigAlgorithm(
    assignmentTable: Table,
    method = ZeroFindingMethod.Greedy,
  ): Observable<KoenigAlgoResponse> {
    const url = this.urlPrefix('koenig-algorithm');
    const params = new HttpParams().set('zero-finding-method', method);

    return this.http
      .post<KoenigAlgoResponse>(url, assignmentTable, {params})
      .pipe(catchError(this.errorHandler.showError));
  }

  @Cacheable({cacheBusterObserver: assignmentProblemCacheBuster})
  public calculateIndependentZeros(
    assignmentTable: Table,
    method = ZeroFindingMethod.Greedy,
  ): Observable<Array<SelectedCell>> {
    const url = this.urlPrefix(`independent-zeros/${method}`);

    return this.http
      .post<Array<SelectedCell>>(url, assignmentTable)
      .pipe(catchError(this.errorHandler.showError));
  }

  @Cacheable({cacheBusterObserver: assignmentProblemCacheBuster})
  public reduce(
    assignmentTable: Table,
    problemType = AssignmentProblemType.Min,
  ): Observable<ReduceResponse> {
    const url = this.urlPrefix('reduce');
    const params = new HttpParams().set('type', problemType);

    return this.http
      .post<ReduceResponse>(url, assignmentTable, {params})
      .pipe(catchError(this.errorHandler.showError));
  }

  private urlPrefix = (path?: string): string => `/api/assignment-problem/${path || ''}`;
}
