import {Pipe, PipeTransform} from '@angular/core';

import {SelectedCell} from '@opres/shared/types';

@Pipe({
  name: 'pathToSelectedCells',
})
export class PathToSelectedCellsPipe implements PipeTransform {
  transform(pathArray: Array<number>): Array<SelectedCell> {
    const selectedCells: Array<SelectedCell> = [];
    for (let i = 0; i < pathArray.length - 1; i++)
      selectedCells.push({
        y: pathArray[i],
        x: pathArray[i + 1],
      });
    return selectedCells;
  }
}
