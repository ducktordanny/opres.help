import {ChangeDetectionStrategy, Component} from '@angular/core';

import {KoenigAlgoResponse} from '@opres/shared/types';
import {Observable} from 'rxjs';

import {AssignmentProblemService} from '../../assignment-problem.service';
import {AssignmentProblemInputForm} from '../../assignment-problem.type';

@Component({
  selector: 'app-koenig-algorithm',
  templateUrl: './koenig-algorithm.tab.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KoenigAlgorithmTabComponent {
  public result!: Observable<KoenigAlgoResponse>;

  constructor(private assignmentProblemService: AssignmentProblemService) {}

  public onFormOutput(data: AssignmentProblemInputForm): void {
    this.result = this.assignmentProblemService.calculateKoenigAlgorithm(
      data.table,
      data?.zeroFindingMethod,
    );
  }
}
