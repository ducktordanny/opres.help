import {Injectable} from '@nestjs/common';

import {CalculationMode, FirstPhaseStep, TPData} from '@opres/shared/types';

@Injectable()
export class VogelKordaMethodService {
  public calculate(
    transportProblemData: TPData,
    mode: CalculationMode,
  ): Array<FirstPhaseStep> {
    // todo: wip
    return [];
  }
}
