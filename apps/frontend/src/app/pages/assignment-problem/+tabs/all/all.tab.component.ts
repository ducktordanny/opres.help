import {ChangeDetectionStrategy, Component} from '@angular/core';

import {HungarianMethodResponse, ProblemTable} from '@opres/shared/types';
import {BehaviorSubject, Observable} from 'rxjs';

import {AssignmentProblemService} from '../../assignment-problem.service';
import {AssignmentProblemInputForm} from '../../assignment-problem.type';

@Component({
  selector: 'app-all-tab',
  templateUrl: './all.tab.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllTabComponent {
  public sourceTable = new BehaviorSubject<ProblemTable | null>(null);
  public result!: Observable<HungarianMethodResponse>;

  constructor(private assignmentProblemService: AssignmentProblemService) {}

  public onFormOutput(data: AssignmentProblemInputForm): void {
    this.sourceTable.next(data.table);
    this.result = this.assignmentProblemService.calculateAll(
      data.table,
      data?.problemType,
      data?.zeroFindingMethod,
    );
  }
}
