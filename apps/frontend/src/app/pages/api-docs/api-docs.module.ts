import {NgModule} from '@angular/core';

import {InfoCardModule} from '@frontend/components/info-card/info-card.module';
import {TranslateModule} from '@ngx-translate/core';

import {ApiDocsPageComponent} from './api-docs.page';
import {ApiDocsRouting} from './api-docs.routing';

@NgModule({
  declarations: [ApiDocsPageComponent],
  imports: [ApiDocsRouting, InfoCardModule, TranslateModule],
})
export class ApiDocsModule {}
