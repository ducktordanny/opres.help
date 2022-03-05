import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'transport-table',
  templateUrl: './transport-table.template.html',
  styleUrls: ['./transport-table.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportTableComponent {}
