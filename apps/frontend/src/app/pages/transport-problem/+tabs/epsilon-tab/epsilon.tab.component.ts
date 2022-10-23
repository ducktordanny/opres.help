import {ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';

import {Epsilon, TransportTable} from '@opres/shared/types';
import {LanguageSwitcherService} from '@frontend/components/layout/language-switcher/language-switcher.service';
import {LoadingHandlerService} from '@frontend/services/loading-handler.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {BehaviorSubject} from 'rxjs';
import {finalize, tap} from 'rxjs/operators';

import {
  transportProblemCacheBuster$,
  TransportProblemService,
} from '../../transport-problem.service';

@UntilDestroy()
@Component({
  selector: 'epsilon-tab',
  templateUrl: './epsilon.tab.template.html',
  styleUrls: ['../tabs.style.scss', './epsilon.tab.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpsilonTabComponent implements OnDestroy {
  public currentLanguage$ = this.languageSwitcherService.currentLanguage;
  public result$ = new BehaviorSubject<Epsilon | null>(null);

  constructor(
    private transportProblemService: TransportProblemService,
    private languageSwitcherService: LanguageSwitcherService,
    private loadingHandler: LoadingHandlerService,
  ) {}

  public onCalculate(transportTable: TransportTable): void {
    this.loadingHandler.start();
    this.transportProblemService
      .getEpsilonResult(transportTable)
      .pipe(
        tap((response) => this.result$.next(response)),
        finalize(() => this.loadingHandler.stop()),
        untilDestroyed(this),
      )
      .subscribe();
  }

  public ngOnDestroy(): void {
    this.loadingHandler.stop();
    transportProblemCacheBuster$.next();
  }
}
