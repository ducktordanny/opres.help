import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-independent-zeros',
  templateUrl: './independent-zeros.tab.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndependentZerosTabComponent {}
