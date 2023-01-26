import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {SelectedCell, Table} from '@opres/shared/types';

@Component({
  selector: 'app-independent-zeros-result',
  templateUrl: './independent-zeros-result.template.html',
  styleUrls: ['../results.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndependentZerosResultComponent {
  @Input() reducedTable!: Table | null;
  @Input() independentZeros!: Array<SelectedCell> | null;
}
