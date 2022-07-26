import {Injectable} from '@angular/core';

import {Table} from '@shared/types/table.types';
import {BehaviorSubject, Observable, scan} from 'rxjs';

import {NorthWestMethodService} from './services/first-phase/north-west.method.service';
import {TableMinimumMethodService} from './services/first-phase/table-minimum.method.service';
import {VogelKordaMethodService} from './services/first-phase/vogel-korda.method.service';
import {checkSolvability} from './utils/solvability.util';
import {EMPTY_TP_DATA} from './transport-problem.constant';
import {
  CalculationProcess,
  Demands,
  Stocks,
  TPData,
  TPMethods,
} from './transport-problem.types';

@Injectable()
export class TransportProblemService {
  /** It contains all table data what are necessary for calculations (costs, demands, stocks). */
  private tpData$ = new BehaviorSubject<TPData>(EMPTY_TP_DATA);
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

  public setCosts(costs: Table): void {
    this.tpData$.next({...this.tpData$.getValue(), costs});
  }

  public setShopDemands(shopDemands: Demands): void {
    this.tpData$.next({...this.tpData$.getValue(), shopDemands});
  }

  public setStorageStocks(storageStocks: Stocks): void {
    this.tpData$.next({...this.tpData$.getValue(), storageStocks});
  }

  public clear(): void {
    this.tpData$.next(EMPTY_TP_DATA);
  }

  public calculateFirstPhase(
    type: TPMethods,
  ): Observable<Array<CalculationProcess>> {
    const tpData = this.tpData$.getValue();
    if (!checkSolvability(tpData))
      throw new Error('The given problem is not solvable! Try another one.');

    return this.firstPhase[type]
      .calculate(tpData)
      .pipe(scan(this.mergeProcesses, [] as Array<CalculationProcess>));
  }

  private mergeProcesses = (
    previous: Array<CalculationProcess>,
    current: CalculationProcess,
  ) => [...previous, current];
}
