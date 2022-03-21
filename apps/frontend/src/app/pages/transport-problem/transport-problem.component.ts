import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSelectChange} from '@angular/material/select';

import {TPMethods, TransportProblemService} from './transport-problem.service';

@Component({
  selector: 'transport-problem-page',
  templateUrl: './transport-problem.template.html',
  styleUrls: ['./transport-problem.style.scss'],
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
