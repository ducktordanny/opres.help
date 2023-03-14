import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-bnb-tree-info-dialog',
  template: `
    <h1 mat-dialog-title>{{ 'TSP.TABS.BNB_METHOD.VIEW_INFO.NAME' | translate }}</h1>
    <div mat-dialog-content>
      <ul>
        <li [innerHTML]="'TSP.TABS.BNB_METHOD.VIEW_INFO.TOWN_ID' | translate"></li>
        <li [innerHTML]="'TSP.TABS.BNB_METHOD.VIEW_INFO.COSTS' | translate"></li>
        <li [innerHTML]="'TSP.TABS.BNB_METHOD.VIEW_INFO.INFO_CARD' | translate"></li>
      </ul>
    </div>
    <div mat-dialog-actions align="center">
      <button mat-raised-button [mat-dialog-close]="null" color="primary">
        {{ 'CLOSE' | translate }}
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BnbTreeInfoDialogComponent {}
