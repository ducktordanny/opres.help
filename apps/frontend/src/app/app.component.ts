import {ChangeDetectionStrategy, Component} from '@angular/core';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.template.html',
  styleUrls: ['./app.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(['en', 'hu']);
    this.translateService.setDefaultLang('en');
  }
}
