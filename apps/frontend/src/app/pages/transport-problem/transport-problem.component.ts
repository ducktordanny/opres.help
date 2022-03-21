import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSelectChange} from '@angular/material/select';

import {TransportProblemService} from './transport-problem.service';
import {TPMethods} from './transport-table.types';

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
    this.transportProblemService.calculate();
  }
}
