import {Injectable} from '@angular/core';

import {CalculationProcess, TPData} from '@opres/shared-interfaces';

@Injectable()
export class VogelKordaMethodService {
  public calculate(transportProblemData: TPData): Array<CalculationProcess> {
    // todo: wip
    return [];
  }
}
