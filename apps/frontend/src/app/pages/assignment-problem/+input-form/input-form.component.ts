import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {assignmentProblemRequestBody2} from '@opres/shared/data/mocks';
import {AssignmentProblemType, ProblemTable, ZeroFindingMethod} from '@opres/shared/types';
import {InputTableService} from '@opres/ui/tables';
import {BehaviorSubject} from 'rxjs';

import {AssignmentProblemInputForm} from '../assignment-problem.type';

@Component({
  selector: 'app-assignment-problem-input-form',
  templateUrl: './input-form.template.html',
  styleUrls: ['./input-form.style.scss', '../+tabs/tabs.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFormComponent {
  @Input() public needZeroFindingMethod = true;
  @Input() public needProblemType = true;
  @Output() public formOutput = new EventEmitter<AssignmentProblemInputForm>();

  public formGroup: FormGroup;
  public table = new BehaviorSubject<ProblemTable>(assignmentProblemRequestBody2);

  constructor(private inputTableService: InputTableService) {
    this.formGroup = new FormGroup({
      zeroFindingMethod: new FormControl(ZeroFindingMethod.Greedy),
      problemType: new FormControl(AssignmentProblemType.Min),
      tableSize: new FormControl(assignmentProblemRequestBody2.length),
    });
  }

  public onCalculate(): void {
    const data = this.formGroup.getRawValue();
    const formOutputData: AssignmentProblemInputForm = {
      table: this.table.getValue(),
    };
    if (this.needProblemType) formOutputData.problemType = data.problemType;
    if (this.needZeroFindingMethod) formOutputData.zeroFindingMethod = data.zeroFindingMethod;
    this.formOutput.emit(formOutputData);
  }

  public onTableClear(): void {
    this.inputTableService.clear('assignment-table');
  }
}
