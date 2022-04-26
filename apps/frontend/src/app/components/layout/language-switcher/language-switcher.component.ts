import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'language-switcher',
  templateUrl: './language-switcher.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcherComponent {}
