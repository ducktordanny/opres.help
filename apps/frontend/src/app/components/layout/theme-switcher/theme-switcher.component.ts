import {ChangeDetectionStrategy, Component} from '@angular/core';

import {
  Theme,
  ThemeSwitcherService,
} from '@frontend/components/layout/theme-switcher/theme-switcher.service';

@Component({
  selector: 'theme-switcher',
  templateUrl: './theme-switcher.template.html',
  styleUrls: ['../layout.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitcherComponent {
  public readonly THEMES: Array<{id: Theme; label: string}> = [
    {id: 'dark-theme', label: 'THEME.DARK'},
    {id: 'light-theme', label: 'THEME.LIGHT'},
    {id: 'auto-theme', label: 'THEME.AUTO'},
  ];
  public selectedTheme$ = this.themeSwitcherService.selectedTheme;

  constructor(private themeSwitcherService: ThemeSwitcherService) {}

  public onThemeSelect(themeId: Theme): void {
    this.themeSwitcherService.changeTheme(themeId);
  }
}
