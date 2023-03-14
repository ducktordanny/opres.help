import {ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';

import {ProblemTable} from '@opres/shared/types';
import {LoadingHandlerService} from '@frontend/services/loading-handler.service';
import {finalize, Observable} from 'rxjs';

import {tspCacheBuster, TspService} from '../../tsp.service';

@Component({
  selector: 'app-reduce-tab',
  templateUrl: './reduce.tab.template.html',
  styleUrls: ['../tabs.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReduceTabComponent implements OnDestroy {
  public result!: Observable<ProblemTable>;

  constructor(private tspService: TspService, private loadingHandler: LoadingHandlerService) {}

  public onFormOutput(table: ProblemTable): void {
    this.loadingHandler.start();
    this.result = this.tspService.reduce(table).pipe(finalize(() => this.loadingHandler.stop()));
  }

  public ngOnDestroy(): void {
    tspCacheBuster.next();
  }
}
