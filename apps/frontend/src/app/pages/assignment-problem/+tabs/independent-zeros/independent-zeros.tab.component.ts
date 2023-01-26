import {ChangeDetectionStrategy, Component} from '@angular/core';

import {SelectedCell, Table} from '@opres/shared/types';
import {BehaviorSubject, Observable} from 'rxjs';

import {AssignmentProblemService} from '../../assignment-problem.service';
import {AssignmentProblemInputForm} from '../../assignment-problem.type';

@Component({
  selector: 'app-independent-zeros',
  templateUrl: './independent-zeros.tab.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndependentZerosTabComponent {
  public reducedTable = new BehaviorSubject<Table>([]);
  public result!: Observable<Array<SelectedCell>>;

  constructor(private assignmentProblemService: AssignmentProblemService) {}

  public onFormOutput(data: AssignmentProblemInputForm): void {
    this.reducedTable.next(data.table);
    this.result = this.assignmentProblemService.calculateIndependentZeros(
      data.table,
      data?.zeroFindingMethod,
    );
  }
}
