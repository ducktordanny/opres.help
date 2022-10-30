import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {Epsilon} from '@opres/shared/types';
import {Language} from '@frontend/components/layout/language-switcher/language-switcher.service';

@Component({
  selector: 'epsilon-result[language]',
  template: `
    <mat-card *ngIf="epsilon && language">
      <mat-card-title> ε: {{ epsilon.value }} </mat-card-title>
      <mat-card-content
        *ngIf="epsilon?.explanation as explanation"
        [innerHTML]="explanation[language] | sanitizeHtml"
      ></mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      :host {
        width: fit-content;
      }

      mat-card {
        box-sizing: border-box;
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
  @Input() language!: Language | null;
}
