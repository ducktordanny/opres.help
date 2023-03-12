import {NgModule} from '@angular/core';

import {ArrayToPathPipe} from './array-to-path.pipe';
import {PathToSelectedCellsPipe} from './path-to-selected-cells.pipe';

@NgModule({
  declarations: [ArrayToPathPipe, PathToSelectedCellsPipe],
  exports: [ArrayToPathPipe, PathToSelectedCellsPipe],
})
export class TspPipesModule {}
