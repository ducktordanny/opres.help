import {ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';

import {ReduceResponse} from '@opres/shared/types';
import {LoadingHandlerService} from '@frontend/services/loading-handler.service';
import {finalize, Observable} from 'rxjs';

import {
  assignmentProblemCacheBuster,
  AssignmentProblemService,
} from '../../assignment-problem.service';
import {AssignmentProblemInputForm} from '../../assignment-problem.type';

@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.tab.template.html',
  styleUrls: ['../tabs.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReduceTabComponent implements OnDestroy {
  public result!: Observable<ReduceResponse>;

  constructor(
    private assignmentProblemService: AssignmentProblemService,
    private loadingHandler: LoadingHandlerService,
  ) {}

  public onFormOutput(data: AssignmentProblemInputForm): void {
    this.result = this.assignmentProblemService
      .reduce(data.table, data?.problemType)
      .pipe(finalize(() => this.loadingHandler.stop()));
  }

  public ngOnDestroy(): void {
    assignmentProblemCacheBuster.next();
  }
}
