import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'layout',
  templateUrl: './layout.template.html',
  styleUrls: ['./layout.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
