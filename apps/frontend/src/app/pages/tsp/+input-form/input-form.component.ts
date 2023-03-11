import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {tspReduceRequestMock1} from '@opres/shared/data/mocks';
import {ProblemTable} from '@opres/shared/types';
import {InputTableService} from '@opres/ui/tables';
import {LoadingHandlerService} from '@frontend/services/loading-handler.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-tsp-input-form',
  templateUrl: './input-form.template.html',
  styleUrls: ['./input-form.style.scss', '../+tabs/tabs.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFormComponent {
  @Output() formOutput = new EventEmitter<ProblemTable>();
  public formGroup: FormGroup;
  public table = new BehaviorSubject<ProblemTable>(tspReduceRequestMock1);
  public readonly isLoading$ = this.loadingHandler.isLoading;

  constructor(
    private inputTableService: InputTableService,
    private loadingHandler: LoadingHandlerService,
  ) {
    this.formGroup = new FormGroup({
      tableSize: new FormControl(this.table.getValue().length),
    });
  }

  public onCalculate(): void {
    this.formOutput.emit(this.table.getValue());
  }

  public onTableClear(): void {
    this.inputTableService.clear('tsp');
  }

  public onTableChange(table: ProblemTable): void {
    this.table.next(table);
  }
}
