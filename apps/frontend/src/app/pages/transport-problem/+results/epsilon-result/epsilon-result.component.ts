import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {Epsilon} from '@opres/shared/types';

@Component({
  selector: 'epsilon-result',
  template: `
    <mat-card *ngIf="epsilon">
      <mat-card-title> ε: {{ epsilon.value }} </mat-card-title>
      <mat-card-content *ngIf="epsilon?.explanation as explanation">{{
        explanation
      }}</mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      :host {
        width: fit-content;
      }

      mat-card {
        width: fit-content;
        max-width: 600px;
        margin: auto;
      }

      mat-card-title {
        text-align: center;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpsilonResultComponent {
  @Input() epsilon?: Epsilon | null;
}
