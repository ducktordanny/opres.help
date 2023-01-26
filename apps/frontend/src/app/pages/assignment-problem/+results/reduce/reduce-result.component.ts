import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {ReduceResponse} from '@opres/shared/types';

@Component({
  selector: 'app-reduce-result',
  templateUrl: './reduce-result.template.html',
  styleUrls: ['../results.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReduceResultComponent {
  @Input() value!: ReduceResponse | null;
}
