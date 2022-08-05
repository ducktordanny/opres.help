import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Table} from '@opres/shared/types';
import {ErrorHandlerService} from '@frontend/services/error-handler.service';
import {catchError} from 'rxjs';

@Injectable()
export class AssignmentProblemService {
  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService,
  ) {}

  public calculateFirsPhase(assignmentTable: Table) {
    return this.http
      .post<Table>(this.urlPrefix('first-phase'), assignmentTable)
      .pipe(catchError(this.errorHandler.showError));
  }

  private urlPrefix = (path: string): string =>
    `/api/assignment-problem/${path}`;
}
