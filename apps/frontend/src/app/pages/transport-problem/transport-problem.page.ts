import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {Table} from '@opres/generatable-tables';
import {
  CalculationProcess,
  Demands,
  Stocks,
  TPData,
  TPMethods,
} from '@opres/shared-interfaces';
import {UntilDestroy} from '@ngneat/until-destroy';
import {BehaviorSubject, Observable, tap} from 'rxjs';

import {checkSolvability} from './utils/solvability.util';
import {EMPTY_TP_DATA} from './transport-problem.constant';
import {TransportProblemService} from './transport-problem.service';

@UntilDestroy()
@Component({
  selector: 'transport-problem-page',
  templateUrl: './transport-problem.template.html',
  styleUrls: ['./transport-problem.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportProblemPageComponent {
  public formGroup: FormGroup;
  public results$: Observable<Array<CalculationProcess>> | null = null;
  public resultEpsilon$ = new BehaviorSubject<number | null>(null);

  /** It contains all table data what are necessary for calculations (costs, demands, stocks). */
  private tpData$ = new BehaviorSubject<TPData>(EMPTY_TP_DATA);

  constructor(private transportProblemService: TransportProblemService) {
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
  }

  public onDemandChange(shopDemands: Demands): void {
    this.tpData$.next({...this.tpData$.getValue(), shopDemands});
  }

  public onStockChange(storageStocks: Stocks): void {
    this.tpData$.next({...this.tpData$.getValue(), storageStocks});
  }

  public onCalculate(event: Event): void {
    event.preventDefault();
    this.formGroup.setErrors(null);
    const tpData = this.tpData$.getValue();

    if (this.formGroup.invalid) return;
    if (!checkSolvability(tpData)) {
      this.results$ = null;
      return this.formGroup.setErrors({invalidTPData: true});
    }

    this.results$ = this.transportProblemService
      .calculateFirstPhase(
        tpData,
        this.formGroup.get('method')?.value as TPMethods,
      )
      .pipe(
        tap((processArray) => {
          const result = processArray[processArray.length - 1].transportation;
          const epsilon = this.transportProblemService.getEpsilon(result);
          this.resultEpsilon$.next(epsilon);
        }),
      );
  }

  public reset(): void {
    this.formGroup.setErrors(null);
    this.results$ = null;
    this.tpData$.next(EMPTY_TP_DATA);
    this.resultEpsilon$.next(null);
  }
}
