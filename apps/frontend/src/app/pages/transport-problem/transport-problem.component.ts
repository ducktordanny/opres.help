import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSelectChange} from '@angular/material/select';

import {TransportProblemService} from './transport-problem.service';

@Component({
  selector: 'transport-problem-page',
  templateUrl: './transport-problem.template.html',
  styleUrls: ['./transport-problem.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportProblemComponent {
  constructor(private transportProblemService: TransportProblemService) {}

  public onShopsCountChange(change: MatSelectChange): void {
    this.transportProblemService.shops$.next(+change.value);
  }

  public onStoragesCountChange(change: MatSelectChange): void {
    this.transportProblemService.storages$.next(+change.value);
  }
}
