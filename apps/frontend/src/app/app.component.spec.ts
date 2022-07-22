import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {TranslateService} from '@ngx-translate/core';

import {AppComponent} from './app.component';
import {AppModule} from './app.module';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let translateService: TranslateService;

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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService);
  });

  it('should add languages & set default', () => {
    const addLanguagesSpy = jest.spyOn(translateService, 'addLangs');
    const setDefaultLanguageSpy = jest.spyOn(
      translateService,
      'setDefaultLang',
    );
    component.ngOnInit();
    expect(addLanguagesSpy).toHaveBeenCalledWith(['en', 'hu']);
    expect(setDefaultLanguageSpy).toHaveBeenCalledWith('en');
  });
});
