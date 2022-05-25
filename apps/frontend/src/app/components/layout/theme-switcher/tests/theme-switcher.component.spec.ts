import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatMenuHarness} from '@angular/material/menu/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {TranslateModule} from '@ngx-translate/core';

import {ThemeSwitcherComponent} from '../theme-switcher.component';
import {ThemeSwitcherModule} from '../theme-switcher.module';
import {ThemeSwitcherService} from '../theme-switcher.service';

describe('ThemeSwitcherComponent', () => {
  let fixture: ComponentFixture<ThemeSwitcherComponent>;
  let component: ThemeSwitcherComponent;
  let themeSwitcherService: ThemeSwitcherService;
  let loader: HarnessLoader;

  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ThemeSwitcherModule,
        TranslateModule.forRoot(),
        NoopAnimationsModule,
      ],
      providers: [ThemeSwitcherService],
    });

    fixture = TestBed.createComponent(ThemeSwitcherComponent);
    component = fixture.componentInstance;
    themeSwitcherService = TestBed.inject(ThemeSwitcherService);
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should be created', () =>
    expect(component).toBeInstanceOf(ThemeSwitcherComponent));

  it('should check default values', () => {
    const THEMES = [
      {id: 'dark-theme', label: 'THEME.DARK'},
      {id: 'light-theme', label: 'THEME.LIGHT'},
      {id: 'auto-theme', label: 'THEME.AUTO'},
    ];
    expect(component.THEMES).toEqual(THEMES);
    expect(component.selectedTheme$.getValue()).toEqual('auto-theme');
  });

  it('should open & close theme switcher menu', async () => {
    const themeSwitcherMenu = await loader.getHarness<MatMenuHarness>(
      MatMenuHarness.with({selector: '[data-test-id="theme-switcher"]'}),
    );
    expect(await themeSwitcherMenu.isOpen()).not.toBeTruthy();
    await themeSwitcherMenu.open();
    expect(await themeSwitcherMenu.isOpen()).toBeTruthy();
    await themeSwitcherMenu.close();
    expect(await themeSwitcherMenu.isOpen()).not.toBeTruthy();
  });

  it('should check number of menu items', async () => {
    const themeSwitcherMenu = await loader.getHarness<MatMenuHarness>(
      MatMenuHarness.with({selector: '[data-test-id="theme-switcher"]'}),
    );
    await themeSwitcherMenu.open();
    const items = await themeSwitcherMenu.getItems();
    expect(items.length).toEqual(3);
  });

  it('should change theme', () => {
    const changeThemeSpy = jest.spyOn(themeSwitcherService, 'changeTheme');
    expect(localStorage.getItem('user.selectedTheme')).toEqual('auto-theme');
    component.onThemeSelect('light-theme');
    expect(localStorage.getItem('user.selectedTheme')).toEqual('light-theme');
    component.onThemeSelect('dark-theme');
    expect(localStorage.getItem('user.selectedTheme')).toEqual('dark-theme');
    expect(changeThemeSpy).toHaveBeenCalledTimes(2);
    expect(
      document.querySelector('body')?.classList?.contains('dark-theme'),
    ).toBeTruthy();
  });
});
