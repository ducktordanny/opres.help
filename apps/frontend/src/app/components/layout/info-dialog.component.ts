import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-info-dialog',
  template: `
    <h1 mat-dialog-title>{{ 'TIPS' | translate }}</h1>
    <div mat-dialog-content>
      <ul>
        <li [innerHTML]="'SCROLL_TIP' | translate"></li>
        <li>
          {{ 'TROUBLE_TIP' | translate
          }}<a href="https://github.com/ducktordanny/opres.help/issues" target="_blank">GitHub</a>.
        </li>
      </ul>
    </div>
    <div mat-dialog-actions align="center">
      <button mat-raised-button color="primary" [mat-dialog-close]="null">
        {{ 'CLOSE' | translate }}
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoDialogComponent {}
