import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSelectChange} from '@angular/material/select';

import {UntilDestroy} from '@ngneat/until-destroy';
import {BehaviorSubject, Observable, of} from 'rxjs';

import {TransportProblemService} from './transport-problem.service';
import {CalculationProcess, TPMethods} from './transport-problem.types';

@UntilDestroy()
@Component({
  selector: 'transport-problem-page',
  templateUrl: './transport-problem.template.html',
  styleUrls: ['./transport-problem.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportProblemPageComponent {
  public readonly resultEpsilon$ = new BehaviorSubject<number | null>(null);
  public readonly selectedMethod$ = new BehaviorSubject<TPMethods>(
    'north-west',
  );
  public error = new BehaviorSubject<string | null>(null);
  public results: Observable<Array<CalculationProcess> | null> = of(null);

  constructor(private transportProblemService: TransportProblemService) {}

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
      this.results = this.transportProblemService.calculateFirstPhase(
        this.selectedMethod$.getValue(),
      );
    } catch (error) {
      this.error.next((<Error>error).message);
    }
  }

  public reset(): void {
    this.error.next(null);
    this.results = of(null);
    this.resultEpsilon$.next(null);
  }
}
