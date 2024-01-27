import {ChangeDetectionStrategy, Component} from '@angular/core';

import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

import {ChangelogService} from './changelog.service';

@Component({
  templateUrl: './changelog.template.html',
  styles: [
    `
      section {
        padding: 16px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangelogPageComponent {
  public changelogContent: Observable<string>;

  constructor(private changelogService: ChangelogService) {
    this.changelogContent = this.changelogService
      .getChangelogContent()
      .pipe(tap((value) => console.log(value)));
  }
}
