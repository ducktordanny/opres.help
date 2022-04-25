import {ChangeDetectionStrategy, Component} from '@angular/core';

import {InputTableService} from '@components/input-table/input-table.service';
import {Table} from '@shared/types/table.types';
import {BehaviorSubject} from 'rxjs';

import {AssignmentProblemService} from './assignment-problem.service';

@Component({
  selector: 'assignment-problem-page',
  templateUrl: './assignment-problem.template.html',
  styleUrls: ['./assignment-problem.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssignmentProblemPageComponent {
  private assignmentTable = new BehaviorSubject<Table>([]);
  public readonly mockedAssignment: Table = [
    {'0': 1, '1': 3, '2': 5, '3': 7, '4': 9, '5': 2},
    {'0': 2, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0},
    {'0': 0, '1': 4, '2': 5, '3': 6, '4': 7, '5': 3},
    {'0': 0, '1': 3, '2': 5, '3': 7, '4': 8, '5': 4},
    {'0': 0, '1': 3, '2': 4, '3': 5, '4': 9, '5': 2},
    {'0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0},
  ];

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
