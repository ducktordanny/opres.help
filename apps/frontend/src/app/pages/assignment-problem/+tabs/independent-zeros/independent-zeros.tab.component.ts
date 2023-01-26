import {ChangeDetectionStrategy, Component} from '@angular/core';

import {SelectedCell} from '@opres/shared/types';
import {Observable} from 'rxjs';

import {AssignmentProblemInputForm} from '../../+input-form/input-form.component';
import {AssignmentProblemService} from '../../assignment-problem.service';

@Component({
  selector: 'app-independent-zeros',
  templateUrl: './independent-zeros.tab.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndependentZerosTabComponent {
  public result!: Observable<Array<SelectedCell>>;

  constructor(private assignmentProblemService: AssignmentProblemService) {}

  public onFormOutput(data: AssignmentProblemInputForm): void {
    this.result = this.assignmentProblemService.calculateIndependentZeros(
      data.table,
      data?.zeroFindingMethod,
    );
  }
}
