import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatMenuHarness} from '@angular/material/menu/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {TranslateModule, TranslateService} from '@ngx-translate/core';

import {LanguageSwitcherComponent} from './language-switcher.component';
import {LanguageSwitcherModule} from './language-switcher.module';

const languagesMock = [
  {id: 'en', label: 'LANGUAGE.EN'},
  {id: 'hu', label: 'LANGUAGE.HU'},
];

describe('LanguageSwitcherComponent', () => {
  let fixture: ComponentFixture<LanguageSwitcherComponent>;
  let component: LanguageSwitcherComponent;
  let loader: HarnessLoader;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LanguageSwitcherModule,
        TranslateModule.forRoot(),
        NoopAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageSwitcherComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    translateService = TestBed.inject(TranslateService);
    translateService.setDefaultLang('en');
    fixture.detectChanges();
  });

  it('should be created', () =>
    expect(component).toBeInstanceOf(LanguageSwitcherComponent));

  it('should check default values', (done) => {
    expect(component.LANGUAGES).toEqual(languagesMock);
    expect(localStorage.getItem('user.selectedLanguage')).toBeNull();
    component.selectedLanguage$.subscribe((language) =>
      expect(language).toEqual('en'),
    );
    done();
  });

  it('should open & close language switcher menu', async () => {
    const languageSwitcherMenu = await loader.getHarness(
      MatMenuHarness.with({selector: '[data-test-id="language-switcher"]'}),
    );
    expect(await languageSwitcherMenu.isOpen()).not.toBeTruthy();
    await languageSwitcherMenu.open();
    expect(await languageSwitcherMenu.isOpen()).toBeTruthy();
    await languageSwitcherMenu.close();
    expect(await languageSwitcherMenu.isOpen()).not.toBeTruthy();
  });

  it('should check number of menu items', async () => {
    const languageSwitcherMenu = await loader.getHarness(
      MatMenuHarness.with({selector: '[data-test-id="language-switcher"]'}),
    );
    await languageSwitcherMenu.open();
    const items = await languageSwitcherMenu.getItems();
    expect(items.length).toEqual(2);
  });

  it('should change language', () => {
    const translateServiceUseSpy = jest.spyOn(translateService, 'use');
    component.onLanguageSelect('hu');
    expect(localStorage.getItem('user.selectedLanguage')).toEqual('hu');
    expect(translateServiceUseSpy).toHaveBeenCalledWith('hu');
  });
});
