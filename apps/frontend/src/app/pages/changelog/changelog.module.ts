import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {MdPreviewModule} from '../../pipes/md-preview/md-preview.module';

import {ChangelogPageComponent} from './changelog.page';
import {ChangelogRouteModule} from './changelog.routing';
import {ChangelogService} from './changelog.service';

@NgModule({
  declarations: [ChangelogPageComponent],
  providers: [ChangelogService],
  imports: [
    ChangelogRouteModule,
    CommonModule,
    HttpClientModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MdPreviewModule,
  ],
  exports: [],
})
export class ChangelogPageModule {}
