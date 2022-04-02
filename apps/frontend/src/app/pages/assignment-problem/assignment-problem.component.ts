import {ChangeDetectionStrategy, Component} from '@angular/core';

import {InputTableService} from '@components/input-table/input-table.service';

@Component({
  selector: 'assignment-problem-page',
  templateUrl: './assignment-problem.template.html',
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssignmentProblemComponent {
  constructor(private inputTableService: InputTableService) {}

  public onAssignmentTableClear(): void {
    this.inputTableService.clear('assignment');
  }
}
