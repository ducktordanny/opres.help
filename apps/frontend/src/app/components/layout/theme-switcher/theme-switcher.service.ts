import {Injectable} from '@angular/core';

import {BehaviorSubject} from 'rxjs';

export type Theme = 'dark-theme' | 'light-theme' | 'auto-theme';

@Injectable({providedIn: 'root'})
export class ThemeSwitcherService {
  public selectedTheme = new BehaviorSubject<Theme>(
    <Theme>localStorage.getItem('user.selectedTheme') || 'auto-theme',
  );
  private darkThemeMatcher = window.matchMedia('(prefers-color-scheme: dark)');

  constructor() {
    this.changeTheme(this.selectedTheme.getValue());
  }

  public changeTheme(theme: Theme): void {
    if (this.selectedTheme.getValue() === 'auto-theme')
      this.darkThemeMatcher.removeEventListener(
        'change',
        this.handleAutoThemeEvent,
      );
    if (theme === 'auto-theme') this.setAutoTheme();
    else this.setExactTheme(theme === 'dark-theme');
    this.selectedTheme.next(theme);
    localStorage.setItem('user.selectedTheme', theme);
  }

  private setAutoTheme(): void {
    this.darkThemeMatcher.addEventListener('change', this.handleAutoThemeEvent);
    this.setExactTheme(this.darkThemeMatcher.matches);
  }

  private setExactTheme(isDarkTheme: boolean) {
    const body = document.querySelector('body');
    if (isDarkTheme) body?.classList.add('dark-theme');
    else body?.classList.remove('dark-theme');
  }

  private handleAutoThemeEvent = (event: MediaQueryListEvent): void => {
    this.setExactTheme(event.matches);
  };
}
