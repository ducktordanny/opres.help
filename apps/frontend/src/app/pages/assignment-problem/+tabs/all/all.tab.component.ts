import {ChangeDetectionStrategy, Component} from '@angular/core';

import {HungarianMethodResponse} from '@opres/shared/types';
import {Observable} from 'rxjs';

import {AssignmentProblemInputForm} from '../../+input-form/input-form.component';
import {AssignmentProblemService} from '../../assignment-problem.service';

@Component({
  selector: 'app-all-tab',
  templateUrl: './all.tab.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllTabComponent {
  public result!: Observable<HungarianMethodResponse>;

  constructor(private assignmentProblemService: AssignmentProblemService) {}

  public onFormOutput(data: AssignmentProblemInputForm): void {
    this.result = this.assignmentProblemService.calculateAll(
      data.table,
      data?.problemType,
      data?.zeroFindingMethod,
    );
  }
}
