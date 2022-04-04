import {ChangeDetectionStrategy, Component} from '@angular/core';

import {InputTableService} from '@components/input-table/input-table.service';
import {Table} from '@shared/types/table.types';
import {BehaviorSubject} from 'rxjs';

import {AssignmentProblemService} from './assignment-problem.service';

@Component({
  selector: 'assignment-problem-page',
  templateUrl: './assignment-problem.template.html',
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssignmentProblemComponent {
  private assignmentTable = new BehaviorSubject<Table>([]);

  constructor(
    private inputTableService: InputTableService,
    private assignmentProblemService: AssignmentProblemService,
  ) {}

  public onAssignmentTableClear(): void {
    this.inputTableService.clear('assignment');
  }

  public onCalculate(event: Event): void {
    event.preventDefault();
    this.assignmentProblemService.calculate(this.assignmentTable.getValue());
  }

  onTableChange(change: Table): void {
    this.assignmentTable.next(change);
  }
}
