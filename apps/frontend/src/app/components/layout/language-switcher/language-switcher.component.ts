import {ChangeDetectionStrategy, Component} from '@angular/core';

import {
  Language,
  LanguageSwitcherService,
} from '@frontend/components/layout/language-switcher/language-switcher.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'language-switcher',
  templateUrl: './language-switcher.template.html',
  styleUrls: ['../layout.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcherComponent {
  public readonly LANGUAGES: Array<{id: Language; label: string}> = [
    {id: 'en', label: 'LANGUAGE.EN'},
    {id: 'hu', label: 'LANGUAGE.HU'},
  ];
  public selectedLanguage$: Observable<Language> =
    this.languageSwitcherService.currentLanguage;

  constructor(private languageSwitcherService: LanguageSwitcherService) {}

  public onLanguageSelect(langId: Language): void {
    this.languageSwitcherService.changeLanguage(langId);
  }
}
