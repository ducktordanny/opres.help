import {TestBed} from '@angular/core/testing';

import {ThemeSwitcherService} from '../theme-switcher.service';

describe('ThemeSwitcherService', () => {
  let themeSwitcherService: ThemeSwitcherService;

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
      providers: [ThemeSwitcherService],
    });
    themeSwitcherService = TestBed.inject(ThemeSwitcherService);
  });

  it('should be created', () =>
    expect(themeSwitcherService).toBeInstanceOf(ThemeSwitcherService));

  it('should have auto-theme as default', (done) => {
    themeSwitcherService.selectedTheme.subscribe((value) => {
      expect(value).toEqual('auto-theme');
      done();
    });
  });

  it('should set dark theme', (done) => {
    const setExactThemeSpy = jest.spyOn(
      themeSwitcherService as any, // eslint-disable-line @typescript-eslint/no-explicit-any
      'setExactTheme',
    );
    themeSwitcherService.changeTheme('dark-theme');
    expect(setExactThemeSpy).toHaveBeenCalledTimes(1);
    themeSwitcherService.selectedTheme.subscribe((value) => {
      expect(value).toEqual('dark-theme');
      done();
    });
  });

  it('should set light theme', (done) => {
    const setExactThemeSpy = jest.spyOn(
      themeSwitcherService as any, // eslint-disable-line @typescript-eslint/no-explicit-any
      'setExactTheme',
    );
    themeSwitcherService.changeTheme('light-theme');
    expect(setExactThemeSpy).toHaveBeenCalledTimes(1);
    themeSwitcherService.selectedTheme.subscribe((value) => {
      expect(value).toEqual('light-theme');
      done();
    });
  });

  it('should set auto theme', (done) => {
    const handleAutoThemeSpy = jest.spyOn(
      themeSwitcherService as any, // eslint-disable-line @typescript-eslint/no-explicit-any
      'handleAutoThemeEvent',
    );
    const setExactThemeSpy = jest.spyOn(
      themeSwitcherService as any, // eslint-disable-line @typescript-eslint/no-explicit-any
      'setExactTheme',
    );

    themeSwitcherService.changeTheme('auto-theme');
    expect(handleAutoThemeSpy).not.toHaveBeenCalled();
    expect(setExactThemeSpy).toHaveBeenCalledTimes(1);
    themeSwitcherService.selectedTheme.subscribe((value) => {
      expect(value).toEqual('auto-theme');
      done();
    });
  });
});
