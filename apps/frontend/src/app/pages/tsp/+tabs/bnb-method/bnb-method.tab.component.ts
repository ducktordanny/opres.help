import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-bnb-method-tab',
  templateUrl: './bnb-method.tab.template.html',
  styleUrls: ['../tabs.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BnbMethodTabComponent {}
