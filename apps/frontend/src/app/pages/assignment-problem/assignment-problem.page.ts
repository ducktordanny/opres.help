import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

import {InputTableService} from '@opres/generatable-tables';
import {Table} from '@opres/shared/types';
import {BehaviorSubject, catchError, Observable, of} from 'rxjs';
import {filter} from 'rxjs/operators';

import {AssignmentProblemService} from './assignment-problem.service';

@Component({
  selector: 'assignment-problem-page',
  templateUrl: './assignment-problem.template.html',
  styleUrls: ['./assignment-problem.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssignmentProblemPageComponent {
  // public result$ = new BehaviorSubject<Table>([]);
  public result$: Observable<Table | null> = of(null);
  public readonly mockedAssignment: Table = [
    {'0': 1, '1': 3, '2': 5, '3': 7, '4': 9, '5': 2},
    {'0': 2, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0},
    {'0': 0, '1': 4, '2': 5, '3': 6, '4': 7, '5': 3},
    {'0': 0, '1': 3, '2': 5, '3': 7, '4': 8, '5': 4},
    {'0': 0, '1': 3, '2': 4, '3': 5, '4': 9, '5': 2},
    {'0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0},
  ];
  private assignmentTable = new BehaviorSubject<Table>([]);

  constructor(
    private inputTableService: InputTableService,
    private assignmentProblemService: AssignmentProblemService,
    private snackbar: MatSnackBar,
  ) {}

  public onAssignmentTableClear(): void {
    this.result$ = of(null);
    this.inputTableService.clear('assignment');
  }

  public onCalculate(event: Event): void {
    event.preventDefault();
    this.result$ = this.assignmentProblemService
      .calculateFirsPhase(this.assignmentTable.getValue())
      .pipe(
        catchError(({error}) => {
          this.snackbar.open(error?.message, 'Close');
          return of(null);
        }),
        filter((value) => value !== null),
      );
  }

  onTableChange(change: Table): void {
    this.assignmentTable.next(change);
  }
}
