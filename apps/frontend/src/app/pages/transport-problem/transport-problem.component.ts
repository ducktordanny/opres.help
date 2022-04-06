import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSelectChange} from '@angular/material/select';

import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';

import {TransportProblemService} from './transport-problem.service';
import {
  CalculationProcess,
  TPMethods,
  TransportTable,
} from './transport-problem.types';

@UntilDestroy()
@Component({
  selector: 'transport-problem-page',
  templateUrl: './transport-problem.template.html',
  styleUrls: ['./transport-problem.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportProblemComponent {
  public readonly resultTable$ = new BehaviorSubject<
    TransportTable | undefined
  >(undefined);
  public readonly resultEpsilon$ = new BehaviorSubject<number | undefined>(
    undefined,
  );
  public readonly selectedMethod$ = this.transportProblemService.method$;
  public results = new BehaviorSubject<Array<CalculationProcess>>([]);

  constructor(private transportProblemService: TransportProblemService) {
    this.transportProblemService.calculationProcess
      .pipe(
        tap((result) =>
          this.results.next([...this.results.getValue(), result]),
        ),
        untilDestroyed(this),
      )
      .subscribe();
  }

  public onShopsCountChange(change: MatSelectChange): void {
    this.transportProblemService.shops$.next(+change.value);
  }

  public onStoragesCountChange(change: MatSelectChange): void {
    this.transportProblemService.storages$.next(+change.value);
  }

  public onMethodSelect(change: MatSelectChange): void {
    this.transportProblemService.method$.next(<TPMethods>change.value);
  }

  public onCalculate(event: Event): void {
    event.preventDefault();
    this.results.next([]);
    const result = this.transportProblemService.calculate();
    this.resultTable$.next(result.table);
    this.resultEpsilon$.next(result.epsilon);
  }

  public reset(): void {
    this.results.next([]);
    this.resultTable$.next(undefined); // eslint-disable-line unicorn/no-useless-undefined
    this.resultEpsilon$.next(undefined); // eslint-disable-line unicorn/no-useless-undefined
  }
}
