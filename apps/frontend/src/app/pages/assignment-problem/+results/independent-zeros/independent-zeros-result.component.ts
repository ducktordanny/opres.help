import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {ProblemTable, SelectedCell} from '@opres/shared/types';

@Component({
  selector: 'app-independent-zeros-result',
  templateUrl: './independent-zeros-result.template.html',
  styleUrls: ['../results.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndependentZerosResultComponent {
  @Input() reducedTable!: ProblemTable | null;
  @Input() independentZeros!: Array<SelectedCell> | null;
}
