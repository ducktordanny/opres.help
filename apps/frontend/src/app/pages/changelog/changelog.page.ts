import {AfterViewInit, ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {TranslateService} from '@ngx-translate/core';
import {Observable} from 'rxjs';

import {ChangelogService} from './changelog.service';

@UntilDestroy()
@Component({
  templateUrl: './changelog.template.html',
  styles: [
    `
      section {
        padding: 16px;
      }

      mat-spinner {
        margin: auto;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangelogPageComponent implements AfterViewInit {
  public changelogContent: Observable<string>;

  constructor(
    private changelogService: ChangelogService,
    private snackBar: MatSnackBar,
    private translateService: TranslateService,
  ) {
    this.changelogContent = this.changelogService.getChangelogContent();
  }

  public ngAfterViewInit(): void {
    this.showLanguageInfo();
    this.translateService.onLangChange
      .pipe(untilDestroyed(this))
      .subscribe(() => this.showLanguageInfo());
  }

  public showLanguageInfo(): void {
    const snackBarContent = this.translateService.instant('CHANGELOG.INFO');
    const actionContent = this.translateService.instant('CLOSE');
    this.snackBar.open(snackBarContent, actionContent, {
      duration: 5_000,
    });
  }
}
