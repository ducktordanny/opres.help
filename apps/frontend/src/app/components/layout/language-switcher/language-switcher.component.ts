import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'language-switcher',
  templateUrl: './language-switcher.template.html',
  styleUrls: ['../layout.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcherComponent implements OnInit {
  public readonly LANGUAGES = [
    {id: 'en', label: 'LANGUAGE.EN'},
    {id: 'hu', label: 'LANGUAGE.HU'},
  ];
  public selectedLanguage =
    localStorage.getItem('user.selectedLanguage') || 'eng';

  constructor(private translateService: TranslateService) {}

  public ngOnInit(): void {
    this.changeLanguage();
  }

  public onLanguageSelect(langId: string): void {
    this.selectedLanguage = langId;
    this.changeLanguage();
  }

  private changeLanguage(): void {
    localStorage.setItem('user.selectedLanguage', this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);
  }
}
