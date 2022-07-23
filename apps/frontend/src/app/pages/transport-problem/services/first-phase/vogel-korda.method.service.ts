import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';

import {CalculationProcess, TPData} from '../../transport-problem.types';

@Injectable()
export class VogelKordaMethodService {
  public calculate(
    transportProblemData: TPData,
  ): Observable<CalculationProcess> {
    // todo: wip
    return of({} as CalculationProcess);
  }
}
