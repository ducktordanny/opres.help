import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {Demands, Stocks, Table, TPData, TPMethods} from '@opres/shared/types';
import {checkSolvability} from '@opres/shared/utils';
import {LoadingHandlerService} from '@frontend/services/loading-handler.service';
import {BehaviorSubject, finalize, Observable} from 'rxjs';

import {
  FullCalculationResult,
  TransportProblemService,
} from '../../transport-problem.service';
import {EMPTY_TP_DATA} from '../tabs.constant';

@Component({
  selector: 'all-tab',
  templateUrl: './all.tab.template.html',
  styleUrls: ['../tabs.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoadingHandlerService],
})
export class AllTabComponent {
  public formGroup: FormGroup;
  public results$: Observable<FullCalculationResult> | null = null;
  public resultEpsilon$ = new BehaviorSubject<number | null>(null);
  public isLoading$ = this.loadingHandler.isLoading;

  /** It contains all table data what are necessary for calculations (costs, demands, stocks). */
  private tpData$ = new BehaviorSubject<TPData>(EMPTY_TP_DATA);

  constructor(
    private transportProblemService: TransportProblemService,
    private loadingHandler: LoadingHandlerService,
  ) {
    const inputValidators = [
      Validators.required,
      Validators.min(3),
      Validators.max(8),
    ];
    this.formGroup = new FormGroup({
      /** A shop is the equivalent of a column. */
      shops: new FormControl(4, inputValidators),
      /** A storage is the equivalent of a row. */
      storages: new FormControl(4, inputValidators),
      /** Three method can be chosen these methods are limited by the TPMethods type. */
      method: new FormControl('north-west', Validators.required),
    });
  }

  public onCostChange(costs: Table): void {
    this.tpData$.next({...this.tpData$.getValue(), costs});
    this.formGroup.setErrors(null);
  }

  public onDemandChange(shopDemands: Demands): void {
    this.tpData$.next({...this.tpData$.getValue(), shopDemands});
    this.formGroup.setErrors(null);
  }

  public onStockChange(storageStocks: Stocks): void {
    this.tpData$.next({...this.tpData$.getValue(), storageStocks});
    this.formGroup.setErrors(null);
  }

  public onCalculate(event: Event): void {
    event.preventDefault();
    this.loadingHandler.start();
    const tpData = this.tpData$.getValue();

    if (this.formGroup.invalid) return this.loadingHandler.stop();
    if (!checkSolvability(tpData)) {
      this.loadingHandler.stop();
      this.results$ = null;
      return this.formGroup.setErrors({invalidTPData: true});
    }

    const method = this.formGroup.get('method')?.value as TPMethods;
    this.results$ = this.transportProblemService
      .getFullCalculationResult(tpData, method)
      .pipe(finalize(() => this.loadingHandler.stop()));
  }

  public reset(): void {
    this.formGroup.setErrors(null);
    this.results$ = null;
    this.tpData$.next(EMPTY_TP_DATA);
    this.resultEpsilon$.next(null);
  }
}
