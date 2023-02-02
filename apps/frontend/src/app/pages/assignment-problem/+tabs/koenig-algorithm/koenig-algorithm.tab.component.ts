import {ChangeDetectionStrategy, Component} from '@angular/core';

import {KoenigAlgoResponse, ProblemTable} from '@opres/shared/types';
import {BehaviorSubject, Observable} from 'rxjs';

import {AssignmentProblemService} from '../../assignment-problem.service';
import {AssignmentProblemInputForm} from '../../assignment-problem.type';

@Component({
  selector: 'app-koenig-algorithm',
  templateUrl: './koenig-algorithm.tab.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KoenigAlgorithmTabComponent {
  public sourceTable = new BehaviorSubject<ProblemTable>([]);
  public result!: Observable<KoenigAlgoResponse>;

  constructor(private assignmentProblemService: AssignmentProblemService) {}

  public onFormOutput(data: AssignmentProblemInputForm): void {
    this.sourceTable.next(data.table);
    this.result = this.assignmentProblemService.calculateKoenigAlgorithm(
      data.table,
      data?.zeroFindingMethod,
    );
  }
}
