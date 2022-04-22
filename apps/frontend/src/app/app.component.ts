import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.template.html',
  styleUrls: ['./app.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
