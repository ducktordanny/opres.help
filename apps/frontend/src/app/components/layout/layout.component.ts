import {MediaMatcher} from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
} from '@angular/core';
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
    {path: '/home', title: 'Home'},
    {path: '/transport-problem', title: 'Transportation problem'},
    {path: '/assignment-problem', title: 'Assignment problem'},
  ];
  private readonly _mobileQueryListener: () => void;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private router: Router,
  ) {
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
