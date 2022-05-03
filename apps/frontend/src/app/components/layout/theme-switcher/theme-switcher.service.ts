import {Injectable} from '@angular/core';

import {BehaviorSubject} from 'rxjs';

export type Theme = 'dark-theme' | 'light-theme' | 'auto-theme';

@Injectable({providedIn: 'root'})
export class ThemeSwitcherService {
  public selectedTheme = new BehaviorSubject<Theme>(
    <Theme>localStorage.getItem('user.selectedTheme') || 'auto-theme',
  );

  constructor() {
    this.changeTheme(this.selectedTheme.getValue());
  }

  public changeTheme(theme: Theme): void {
    if (theme === 'auto-theme') return this.setAutoTheme();
    this.setExactTheme(theme === 'dark-theme');
    this.selectedTheme.next(theme);
    localStorage.setItem('user.selectedTheme', theme);
  }

  private setAutoTheme() {
    const darkThemeMatcher = window.matchMedia('(prefers-color-scheme: dark)');
  }

  private setExactTheme(isDarkTheme: boolean) {
    const body = document.querySelector('body');
    if (isDarkTheme) body?.classList.add('dark-theme');
    else body?.classList.remove('dark-theme');
  }
}
