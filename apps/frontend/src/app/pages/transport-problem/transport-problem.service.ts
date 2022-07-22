import {Injectable} from '@angular/core';

import {Table} from '@shared/types/table.types';
import {BehaviorSubject, Observable, scan} from 'rxjs';

import {NorthWestMethodService} from './services/first-phase/north-west.method.service';
import {
  EMPTY_CALCULATION_PROCESS,
  EMPTY_TP_DATA,
} from './transport-problem.constant';
import {
  CalculationProcess,
  Demands,
  Stocks,
  TPData,
  TPMethods,
} from './transport-problem.types';

@Injectable()
export class TransportProblemService {
  /** A shop is the equivalent of a column. */
  public shops$ = new BehaviorSubject<number>(4);
  /** A storage is the equivalent of a row. */
  public storages$ = new BehaviorSubject<number>(4);
  private calculationProcess$ = new BehaviorSubject<CalculationProcess>(
    EMPTY_CALCULATION_PROCESS,
  );
  /** It contains all table data what are necessary for calculations (costs, demands, stocks). */
  private tpData$ = new BehaviorSubject<TPData>(EMPTY_TP_DATA);

  constructor(private northWestMethod: NorthWestMethodService) {}

  public get calculationProcess() {
    return this.calculationProcess$.asObservable();
  }

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

  public reset(): void {
    this.calculationProcess$.next(EMPTY_CALCULATION_PROCESS);
  }

  public calculateFirstPhase(
    type: TPMethods,
  ): Observable<Array<CalculationProcess>> {
    return this.northWestMethod
      .calculate(this.tpData$.getValue())
      .pipe(scan(this.mergeProcesses, [] as Array<CalculationProcess>));
  }

  private mergeProcesses = (
    previous: Array<CalculationProcess>,
    current: CalculationProcess,
  ) => [...previous, current];
}
