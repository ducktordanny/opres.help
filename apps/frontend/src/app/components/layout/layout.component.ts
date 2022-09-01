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
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';

import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter, map, pluck, tap} from 'rxjs/operators';

@UntilDestroy()
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
  public isLoading = new BehaviorSubject<boolean>(true);
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

    this.router.events
      .pipe(
        tap((event) => {
          if (event instanceof NavigationStart) this.isLoading.next(true);
          else if (
            event instanceof NavigationEnd ||
            event instanceof NavigationCancel ||
            event instanceof NavigationError
          )
            this.isLoading.next(false);
        }),
        untilDestroyed(this),
      )
      .subscribe();
  }

  public ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  public async onLogoRedirect(): Promise<void> {
    await this.router.navigate(['/home']);
  }
}
