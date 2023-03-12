import {NgModule} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';

import {TranslateModule} from '@ngx-translate/core';

import {TabsModule} from '../../assignment-problem/+tabs/tabs.module';

import {ReduceResultComponent} from './reduce/reduce-result.component';

@NgModule({
  declarations: [ReduceResultComponent],
  imports: [MatDividerModule, TabsModule, TranslateModule],
  exports: [ReduceResultComponent],
})
export class ResultsModule {}
