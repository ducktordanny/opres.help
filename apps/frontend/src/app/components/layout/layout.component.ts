import {MediaMatcher} from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';

import {Observable} from 'rxjs';
import {filter, map, pluck} from 'rxjs/operators';

@Component({
  selector: 'layout',
  templateUrl: './layout.template.html',
  styleUrls: ['./layout.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnDestroy {
  @Input() routesToHideNavbar: Array<string> = ['/home', '/'];
  public shouldFilterByUrl: Observable<boolean>;
  public mobileQuery: MediaQueryList;
  public readonly ROUTES = [
    {path: '/home', title: 'SIDEBAR_MENU.HOME'},
    {path: '/public-api-docs', title: 'SIDEBAR_MENU.API_DOCS'},
    {
      path: '/transport-problem',
      title: 'SIDEBAR_MENU.TRANSPORTATION_PROBLEM',
    },
    {
      path: '/assignment-problem',
      title: 'SIDEBAR_MENU.ASSIGNMENT_PROBLEM',
    },
  ];
  public isLoading: Observable<boolean>;
  private readonly _mobileQueryListener: () => void;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private iconRegistry: MatIconRegistry,
    private media: MediaMatcher,
    private router: Router,
    private sanitizer: DomSanitizer,
  ) {
    iconRegistry.addSvgIcon(
      'opres',
      sanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/icons/opres-white.icon.svg',
      ),
    );
    this.mobileQuery = media.matchMedia('(max-width: 700px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);

    this.shouldFilterByUrl = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      pluck('url'),
      map((url) => this.routesToHideNavbar.some((element) => element === url)),
    );

    this.isLoading = this.router.events.pipe(
      map((event) => event instanceof NavigationStart),
    );
  }

  public ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  public async onLogoRedirect(): Promise<void> {
    await this.router.navigate(['/home']);
  }
}
