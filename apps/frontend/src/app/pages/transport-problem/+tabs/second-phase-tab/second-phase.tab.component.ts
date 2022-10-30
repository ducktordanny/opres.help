import {ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';

import {TransportTable} from '@opres/shared/types';
import {LanguageSwitcherService} from '@frontend/components/layout/language-switcher/language-switcher.service';
import {LoadingHandlerService} from '@frontend/services/loading-handler.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {BehaviorSubject} from 'rxjs';
import {finalize, tap} from 'rxjs/operators';

import {
  SecondPhaseResult,
  transportProblemCacheBuster$,
  TransportProblemService,
} from '../../transport-problem.service';

@UntilDestroy()
@Component({
  selector: 'second-phase-tab',
  templateUrl: './second-phase.tab.template.html',
  styleUrls: ['../tabs.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondPhaseTabComponent implements OnDestroy {
  public result$ = new BehaviorSubject<SecondPhaseResult | null>(null);
  public currentLanguage$ = this.languageSwitcherService.currentLanguage;

  constructor(
    private transportProblemService: TransportProblemService,
    private languageSwitcherService: LanguageSwitcherService,
    private loadingHandler: LoadingHandlerService,
  ) {}

  public onCalculate(transportTable: TransportTable): void {
    this.loadingHandler.start();
    this.transportProblemService
      .getSecondPhaseResult(transportTable)
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
