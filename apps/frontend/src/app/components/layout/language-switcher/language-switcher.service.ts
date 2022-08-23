import {Injectable} from '@angular/core';

import {TranslateService} from '@ngx-translate/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export type Language = 'en' | 'hu';

@Injectable({providedIn: 'root'})
export class LanguageSwitcherService {
  private currentLanguageSubject = new BehaviorSubject<Language>(
    (localStorage.getItem('user.selectedLanguage') ||
      this.translateService.getDefaultLang()) as Language,
  );

  public get currentLanguage(): Observable<Language> {
    return this.currentLanguageSubject.asObservable();
  }

  constructor(private translateService: TranslateService) {
    this.currentLanguageSubject
      .pipe(tap((language) => this.translateService.use(language)))
      .subscribe();
  }

  public changeLanguage(languageId: Language): void {
    this.currentLanguageSubject.next(languageId);
    localStorage.setItem('user.selectedLanguage', languageId);
  }
}
