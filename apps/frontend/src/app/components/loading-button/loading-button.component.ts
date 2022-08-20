import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {Observable} from 'rxjs';

@Component({
  selector: 'loading-button[loading]',
  template: `
    <button
      mat-flat-button
      color="primary"
      type="button"
      class="loading-button"
      data-test-id="calculate-button"
      *ngIf="{loading: loading | async} as sub"
      [disabled]="invalid || sub.loading"
    >
      <mat-spinner
        *ngIf="sub.loading"
        color="accent"
        strokeWidth="4"
        diameter="18"
        style="padding-right: 4px"
      ></mat-spinner>
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./loading-button.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingButtonComponent {
  @Input() public loading!: Observable<boolean>;
  @Input() public invalid = false;
}
