import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Table} from '@opres/shared/types';

@Injectable()
export class AssignmentProblemService {
  constructor(private http: HttpClient) {}

  public calculateFirsPhase(assignmentTable: Table) {
    return this.http.post<Table>(
      '/api/assignment-problem/first-phase',
      assignmentTable,
    );
  }
}
