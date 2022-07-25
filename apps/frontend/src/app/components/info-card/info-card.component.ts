import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

export type InfoCardType = 'info' | 'warning' | 'error';

@Component({
  selector: 'info-card',
  templateUrl: './info-card.template.html',
  styleUrls: ['./info-card.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoCardComponent {
  @Input() public title?: string;
  @Input() public type: InfoCardType = 'info';
  @Input() public icon?: string;
  @Input() public width?: string;
}
