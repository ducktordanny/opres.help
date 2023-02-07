import {ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';

import {assignmentProblemRequestBody1} from '@opres/shared/data/mocks';
import {ProblemTable, SelectedCell} from '@opres/shared/types';
import {LoadingHandlerService} from '@frontend/services/loading-handler.service';
import {BehaviorSubject, finalize, Observable} from 'rxjs';

import {
  assignmentProblemCacheBuster,
  AssignmentProblemService,
} from '../../assignment-problem.service';
import {AssignmentProblemInputForm} from '../../assignment-problem.type';

@Component({
  selector: 'app-independent-zeros',
  templateUrl: './independent-zeros.tab.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndependentZerosTabComponent implements OnDestroy {
  public readonly defaultInputTable = assignmentProblemRequestBody1;
  public reducedTable = new BehaviorSubject<ProblemTable>([]);
  public result!: Observable<Array<SelectedCell>>;

  constructor(
    private assignmentProblemService: AssignmentProblemService,
    private loadingHandler: LoadingHandlerService,
  ) {}

  public onFormOutput(data: AssignmentProblemInputForm): void {
    this.reducedTable.next(data.table);
    this.result = this.assignmentProblemService
      .calculateIndependentZeros(data.table, data?.zeroFindingMethod)
      .pipe(finalize(() => this.loadingHandler.stop()));
  }

  public ngOnDestroy(): void {
    assignmentProblemCacheBuster.next();
  }
}
