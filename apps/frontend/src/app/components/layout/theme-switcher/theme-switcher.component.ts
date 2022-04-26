import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'theme-switcher',
  templateUrl: './theme-switcher.template.html',
  styleUrls: ['./theme-switcher.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitcherComponent implements OnInit {
  public themes = [
    {id: 'dark-theme', label: 'Dark'},
    {id: 'light-theme', label: 'Light'},
  ];
  public selectedTheme =
    localStorage.getItem('user.selectedTheme') || 'dark-theme';

  public ngOnInit(): void {
    this.changeTheme();
  }

  public onThemeSelect(themeId: string): void {
    this.selectedTheme = themeId;
    localStorage.setItem('user.selectedTheme', themeId);
    this.changeTheme();
  }

  private changeTheme(): void {
    const body = document.querySelector('body');
    if (this.selectedTheme === 'dark-theme') body?.classList.add('dark-theme');
    else body?.classList.remove('dark-theme');
  }
}
