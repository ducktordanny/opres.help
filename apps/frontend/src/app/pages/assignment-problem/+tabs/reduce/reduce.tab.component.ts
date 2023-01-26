import {ChangeDetectionStrategy, Component} from '@angular/core';

import {ReduceResponse} from '@opres/shared/types';
import {Observable} from 'rxjs';

import {AssignmentProblemService} from '../../assignment-problem.service';
import {AssignmentProblemInputForm} from '../../assignment-problem.type';

@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.tab.template.html',
  styleUrls: ['../tabs.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReduceTabComponent {
  public result!: Observable<ReduceResponse>;

  constructor(private assignmentProblemService: AssignmentProblemService) {}

  public onFormOutput(data: AssignmentProblemInputForm): void {
    this.result = this.assignmentProblemService.reduce(data.table, data?.problemType);
  }
}
