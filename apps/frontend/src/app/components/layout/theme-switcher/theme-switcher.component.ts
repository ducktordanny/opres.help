import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'theme-switcher',
  templateUrl: './theme-switcher.template.html',
  styleUrls: ['../layout.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitcherComponent implements OnInit {
  public readonly THEMES = [
    {id: 'dark-theme', label: 'THEME.DARK'},
    {id: 'light-theme', label: 'THEME.LIGHT'},
  ];
  public selectedTheme =
    localStorage.getItem('user.selectedTheme') || 'dark-theme';

  public ngOnInit(): void {
    this.changeTheme();
  }

  public onThemeSelect(themeId: string): void {
    this.selectedTheme = themeId;
    this.changeTheme();
  }

  private changeTheme(): void {
    localStorage.setItem('user.selectedTheme', this.selectedTheme);
    const body = document.querySelector('body');
    if (this.selectedTheme === 'dark-theme') body?.classList.add('dark-theme');
    else body?.classList.remove('dark-theme');
  }
}
