import {ChangeDetectionStrategy, Component} from '@angular/core';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'language-switcher',
  templateUrl: './language-switcher.template.html',
  styleUrls: ['../layout.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcherComponent {
  public readonly LANGUAGES = [
    {id: 'en', label: 'LANGUAGE.EN'},
    {id: 'hu', label: 'LANGUAGE.HU'},
  ];
  public selectedLanguage = localStorage.getItem('user.selectedLanguage');

  constructor(private translateService: TranslateService) {
    if (!this.selectedLanguage)
      this.selectedLanguage = this.translateService.getDefaultLang();
    else this.translateService.use(this.selectedLanguage);
  }

  public onLanguageSelect(langId: string): void {
    this.selectedLanguage = langId;
    localStorage.setItem('user.selectedLanguage', langId);
    this.translateService.use(langId);
  }
}
