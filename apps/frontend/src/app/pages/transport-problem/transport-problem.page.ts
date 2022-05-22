import {ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';
import {MatSelectChange} from '@angular/material/select';

import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';

import {TransportProblemService} from './transport-problem.service';
import {CalculationProcess, TPMethods} from './transport-problem.types';

@UntilDestroy()
@Component({
  selector: 'transport-problem-page',
  templateUrl: './transport-problem.template.html',
  styleUrls: ['./transport-problem.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportProblemPageComponent implements OnDestroy {
  public readonly resultEpsilon$ = new BehaviorSubject<number | null>(null);
  public readonly selectedMethod$ = new BehaviorSubject<TPMethods>(
    'north-west',
  );
  public error = new BehaviorSubject<string | null>(null);
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

  public ngOnDestroy(): void {
    this.transportProblemService.reset();
  }

  public onShopsCountChange(change: MatSelectChange): void {
    this.transportProblemService.shops$.next(+change.value);
  }

  public onStoragesCountChange(change: MatSelectChange): void {
    this.transportProblemService.storages$.next(+change.value);
  }

  public onMethodSelect(change: MatSelectChange): void {
    this.selectedMethod$.next(<TPMethods>change.value);
  }

  public onCalculate(event: Event): void {
    event.preventDefault();
    try {
      this.error.next(null);
      this.results.next([]);
      const result = this.transportProblemService.northWest();
      this.resultEpsilon$.next(result.epsilon);
    } catch (error) {
      this.error.next((<Error>error).message);
    }
  }

  public reset(): void {
    this.error.next(null);
    this.results.next([]);
    this.resultEpsilon$.next(null);
  }
}
