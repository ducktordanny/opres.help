import {ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';

import {BnbResult, ProblemTable} from '@opres/shared/types';
import {LoadingHandlerService} from '@frontend/services/loading-handler.service';
import {finalize, Observable} from 'rxjs';

import {tspCacheBuster, TspService} from '../../tsp.service';

@Component({
  selector: 'app-bnb-method-tab',
  templateUrl: './bnb-method.tab.template.html',
  styleUrls: ['../tabs.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BnbMethodTabComponent implements OnDestroy {
  public result!: Observable<BnbResult>;

  constructor(private tspService: TspService, private loadingHandler: LoadingHandlerService) {}

  public onFormOutput(table: ProblemTable): void {
    this.loadingHandler.start();
    this.result = this.tspService.bnbMethod(table).pipe(finalize(() => this.loadingHandler.stop()));
  }

  public ngOnDestroy(): void {
    tspCacheBuster.next();
  }
}
