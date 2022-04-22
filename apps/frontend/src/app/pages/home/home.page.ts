import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home.template.html',
  styleUrls: ['./home.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
