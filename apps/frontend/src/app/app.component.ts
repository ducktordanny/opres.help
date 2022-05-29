import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.template.html',
  styleUrls: ['./app.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(private translateService: TranslateService) {}

  public ngOnInit(): void {
    this.translateService.addLangs(['en', 'hu']);
    this.translateService.setDefaultLang('en');
  }
}
