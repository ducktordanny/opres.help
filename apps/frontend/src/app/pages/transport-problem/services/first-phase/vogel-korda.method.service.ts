import {Injectable} from '@angular/core';

import {CalculationProcess, TPData} from '@opres/shared-interfaces';
import {Observable, of} from 'rxjs';

@Injectable()
export class VogelKordaMethodService {
  public calculate(
    transportProblemData: TPData,
  ): Observable<CalculationProcess> {
    // todo: wip
    return of({} as CalculationProcess);
  }
}
