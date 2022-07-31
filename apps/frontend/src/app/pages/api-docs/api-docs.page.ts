import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'api-docs',
  templateUrl: './api-docs.template.html',
  styleUrls: ['./api-docs.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApiDocsPageComponent {}
