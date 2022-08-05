import {Injectable} from '@nestjs/common';

import {
  CalculationMode,
  SecondPhaseStep,
  TransportTable,
} from '@opres/shared/types';

@Injectable()
export class SecondPhaseService {
  public calculate(
    transportTable: TransportTable,
    mode: CalculationMode,
  ): Array<SecondPhaseStep> {
    // todo wip
    return [];
  }
}
