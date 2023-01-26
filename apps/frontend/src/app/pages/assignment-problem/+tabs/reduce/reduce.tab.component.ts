import {ChangeDetectionStrategy, Component} from '@angular/core';

import {ReduceResponse} from '@opres/shared/types';
import {Observable} from 'rxjs';

import {AssignmentProblemInputForm} from '../../+input-form/input-form.component';
import {AssignmentProblemService} from '../../assignment-problem.service';

@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.tab.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReduceTabComponent {
  public result!: Observable<ReduceResponse>;

  constructor(private assignmentProblemService: AssignmentProblemService) {}

  public onFormOutput(data: AssignmentProblemInputForm): void {
    this.result = this.assignmentProblemService.reduce(data.table, data?.problemType);
  }
}
