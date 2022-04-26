import {MediaMatcher} from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'layout',
  templateUrl: './layout.template.html',
  styleUrls: ['./layout.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnDestroy {
  public mobileQuery: MediaQueryList;
  public readonly ROUTES = [
    {path: '/home', title: 'SIDEBAR_MENU.HOME'},
    {
      path: '/transport-problem',
      title: 'SIDEBAR_MENU.TRANSPORTATION_PROBLEM',
    },
    {
      path: '/assignment-problem',
      title: 'SIDEBAR_MENU.ASSIGNMENT_PROBLEM',
    },
  ];
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
  }

  public ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  public async onLogoRedirect(): Promise<void> {
    await this.router.navigate(['/home']);
  }
}
