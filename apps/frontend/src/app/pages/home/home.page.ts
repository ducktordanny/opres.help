import {ChangeDetectionStrategy, Component} from '@angular/core';

import constants from '@opres/shared/data/constants';

@Component({
  selector: 'home-page',
  templateUrl: './home.template.html',
  styleUrls: ['./home.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  public appVersion = constants.appVersion;

  public scrollTo(element: HTMLElement): void {
    element.scrollIntoView({behavior: 'smooth'});
  }
}
