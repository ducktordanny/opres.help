import {ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';

import {assignmentProblemRequestBody1} from '@opres/shared/data/mocks';
import {KoenigAlgoResponse, ProblemTable} from '@opres/shared/types';
import {LoadingHandlerService} from '@frontend/services/loading-handler.service';
import {BehaviorSubject, finalize, Observable} from 'rxjs';

import {
  assignmentProblemCacheBuster,
  AssignmentProblemService,
} from '../../assignment-problem.service';
import {AssignmentProblemInputForm} from '../../assignment-problem.type';

@Component({
  selector: 'app-koenig-algorithm',
  templateUrl: './koenig-algorithm.tab.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KoenigAlgorithmTabComponent implements OnDestroy {
  public readonly defaultInputTable = assignmentProblemRequestBody1;
  public sourceTable = new BehaviorSubject<ProblemTable>([]);
  public result!: Observable<KoenigAlgoResponse>;

  constructor(
    private assignmentProblemService: AssignmentProblemService,
    private loadingHandler: LoadingHandlerService,
  ) {}

  public onFormOutput(data: AssignmentProblemInputForm): void {
    this.sourceTable.next(data.table);
    this.result = this.assignmentProblemService
      .calculateKoenigAlgorithm(data.table, data?.zeroFindingMethod)
      .pipe(finalize(() => this.loadingHandler.stop()));
  }

  public ngOnDestroy(): void {
    assignmentProblemCacheBuster.next();
  }
}
