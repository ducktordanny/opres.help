import {Injectable} from '@angular/core';

import {
  CalculationProcess,
  TPData,
  TPMethods,
  TransportTable,
} from '@opres/shared-interfaces';
import {Observable, of} from 'rxjs';

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
    return of(this.firstPhase[type].calculate(transportProblemData));
  }

  public getEpsilon(resultTable: TransportTable): number {
    let epsilon = 0;

    for (const [rowIndex, row] of resultTable.entries())
      for (const [columnIndex] of Object.entries(row))
        epsilon +=
          (resultTable[rowIndex][columnIndex].cost || 0) *
          (resultTable[rowIndex][columnIndex].transported || 0);

    return epsilon;
  }
}
