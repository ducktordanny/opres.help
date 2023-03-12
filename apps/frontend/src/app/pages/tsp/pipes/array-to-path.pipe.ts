import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'arrayToPath',
})
export class ArrayToPathPipe implements PipeTransform {
  public transform(pathArray: Array<number>): string {
    return pathArray.map((townId) => townId + 1).join(' -> ');
  }
}
