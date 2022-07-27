import {Injectable} from '@angular/core';

import {CalculationProcess, TPData, TPMethods} from '@opres/shared-interfaces';
import {Observable, scan} from 'rxjs';

import {NorthWestMethodService} from './services/first-phase/north-west.method.service';
import {TableMinimumMethodService} from './services/first-phase/table-minimum.method.service';
import {VogelKordaMethodService} from './services/first-phase/vogel-korda.method.service';

@Injectable()
export class TransportProblemService {
  private firstPhase = {
    'north-west': this.northWestMethod,
    'table-min': this.tableMinimumMethod,
    'vogel-korda': this.vogelKordaMethod,
  };

  constructor(
    private northWestMethod: NorthWestMethodService,
    private tableMinimumMethod: TableMinimumMethodService,
    private vogelKordaMethod: VogelKordaMethodService,
  ) {}

  public calculateFirstPhase(
    transportProblemData: TPData,
    type: TPMethods = 'north-west',
  ): Observable<Array<CalculationProcess>> {
    return this.firstPhase[type]
      .calculate(transportProblemData)
      .pipe(scan(this.mergeProcesses, [] as Array<CalculationProcess>));
  }

  private mergeProcesses = (
    previous: Array<CalculationProcess>,
    current: CalculationProcess,
  ) => [...previous, current];
}
