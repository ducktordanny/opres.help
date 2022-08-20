import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {Demands, Stocks, Table, TPData, TPMethods} from '@opres/shared/types';
import {checkSolvability} from '@opres/shared/utils';
import {LoadingHandlerService} from '@frontend/services/loading-handler.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {BehaviorSubject, finalize, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

import {
  FullCalculationResult,
  transportProblemCacheBuster$,
  TransportProblemService,
} from '../../transport-problem.service';
import {EMPTY_TP_DATA} from '../tabs.constant';

@UntilDestroy()
@Component({
  selector: 'all-tab',
  templateUrl: './all.tab.template.html',
  styleUrls: ['../tabs.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllTabComponent {
  public formGroup: FormGroup;
  public isLoading$ = this.loadingHandler.isLoading;
  public results$: Observable<FullCalculationResult> | null = null;

  /** It contains all table data what are necessary for calculations (costs, demands, stocks). */
  private tpData$ = new BehaviorSubject<TPData>(EMPTY_TP_DATA);

  constructor(
    private transportProblemService: TransportProblemService,
    private loadingHandler: LoadingHandlerService,
  ) {
    this.formGroup = new FormGroup({
      /** A shop is the equivalent of a column. */
      shops: new FormControl(4, transportProblemService.tableSizeValidators),
      /** A storage is the equivalent of a row. */
      storages: new FormControl(4, transportProblemService.tableSizeValidators),
      /** Three method can be chosen these methods are limited by the TPMethods type. */
      method: new FormControl('north-west', Validators.required),
    });

    this.formGroup.valueChanges
      .pipe(
        tap(() => transportProblemCacheBuster$.next()),
        untilDestroyed(this),
      )
      .subscribe();
  }

  public onCostChange(costs: Table): void {
    this.tpData$.next({...this.tpData$.getValue(), costs});
    transportProblemCacheBuster$.next();
    this.formGroup.setErrors(null);
  }

  public onDemandChange(shopDemands: Demands): void {
    this.tpData$.next({...this.tpData$.getValue(), shopDemands});
    transportProblemCacheBuster$.next();
    this.formGroup.setErrors(null);
  }

  public onStockChange(storageStocks: Stocks): void {
    this.tpData$.next({...this.tpData$.getValue(), storageStocks});
    transportProblemCacheBuster$.next();
    this.formGroup.setErrors(null);
  }

  public onCalculate(): void {
    this.loadingHandler.start();
    const tpData = this.tpData$.getValue();

    if (this.formGroup.invalid) return this.loadingHandler.stop();
    if (!checkSolvability(tpData)) {
      this.loadingHandler.stop();
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
  }
}
