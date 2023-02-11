import {ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';

import {HungarianMethodResponse, ProblemTable} from '@opres/shared/types';
import {LoadingHandlerService} from '@frontend/services/loading-handler.service';
import {BehaviorSubject, finalize, Observable} from 'rxjs';

import {
  assignmentProblemCacheBuster,
  AssignmentProblemService,
} from '../../assignment-problem.service';
import {AssignmentProblemInputForm} from '../../assignment-problem.type';

@Component({
  selector: 'app-all-tab',
  templateUrl: './all.tab.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllTabComponent implements OnDestroy {
  public originalTable = new BehaviorSubject<ProblemTable | null>(null);
  public result!: Observable<HungarianMethodResponse>;

  constructor(
    private assignmentProblemService: AssignmentProblemService,
    private loadingHandler: LoadingHandlerService,
  ) {}

  public onFormOutput(data: AssignmentProblemInputForm): void {
    this.loadingHandler.start();
    this.originalTable.next(data.table);
    this.result = this.assignmentProblemService
      .calculateAll(data.table, data?.problemType, data?.zeroFindingMethod)
      .pipe(finalize(() => this.loadingHandler.stop()));
  }

  public ngOnDestroy(): void {
    assignmentProblemCacheBuster.next();
  }
}
