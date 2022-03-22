import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSelectChange} from '@angular/material/select';

import {BehaviorSubject} from 'rxjs';

import {TransportProblemService} from './transport-problem.service';
import {TPMethods, TransportTable} from './transport-problem.types';

@Component({
  selector: 'transport-problem-page',
  templateUrl: './transport-problem.template.html',
  styles: [
    `
      mat-form-field {
        margin: 8px;
      }

      mat-hint {
        display: block;
        max-width: 500px;
        margin: 8px;
      }

      button[type='submit'] {
        margin: 8px;
      }
    `,
  ],
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

  constructor(private transportProblemService: TransportProblemService) {}

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
    const result = this.transportProblemService.calculate();
    this.resultTable$.next(result.table);
    this.resultEpsilon$.next(result.epsilon);
  }
}
