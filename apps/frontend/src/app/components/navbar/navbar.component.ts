import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.template.html',
  styleUrls: ['./navbar.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {}
