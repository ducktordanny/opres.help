import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'language-switcher',
  templateUrl: './language-switcher.template.html',
  styleUrls: ['../layout.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcherComponent implements OnInit {
  public readonly LANGUAGES = [
    {id: 'eng', label: '🇬🇧 Angol'},
    {id: 'hun', label: '🇭🇺 Magyar'},
  ];
  public selectedLanguage =
    localStorage.getItem('user.selectedLanguage') || 'eng';

  public ngOnInit(): void {
    this.changeLanguage();
  }

  public onLanguageSelect(langId: string): void {
    this.selectedLanguage = langId;
    this.changeLanguage();
  }

  private changeLanguage(): void {
    localStorage.setItem('user.selectedLanguage', this.selectedLanguage);
    // ...
  }
}
