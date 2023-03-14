import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {ProblemTable} from '@opres/shared/types';

@Component({
  selector: 'app-tsp-reduce-result[table]',
  templateUrl: './reduce-result.template.html',
  styleUrls: ['../results.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReduceResultComponent {
  @Input() table!: ProblemTable;
}
