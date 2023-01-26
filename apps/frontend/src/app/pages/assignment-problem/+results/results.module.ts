import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';

import {TableModule} from '@opres/ui/tables';

import {IndependentZerosResultComponent} from './independent-zeros/independent-zeros-result.component';
import {KoenigAlgorithmResultComponent} from './koenig-algorithm/koenig-algorithm-result.component';
import {ReduceResultComponent} from './reduce/reduce-result.component';

@NgModule({
  declarations: [
    IndependentZerosResultComponent,
    KoenigAlgorithmResultComponent,
    ReduceResultComponent,
  ],
  imports: [CommonModule, TableModule, MatDividerModule],
  exports: [IndependentZerosResultComponent, KoenigAlgorithmResultComponent, ReduceResultComponent],
})
export class ResultsModule {}
