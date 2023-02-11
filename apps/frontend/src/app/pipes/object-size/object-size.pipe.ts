import {Pipe, PipeTransform} from '@angular/core';

import {isObject} from 'lodash';

@Pipe({
  name: 'objectSize',
})
export class ObjectSizePipe implements PipeTransform {
  public transform(value: unknown): number {
    if (!isObject(value)) return -1;
    return Object.keys(value).length;
  }
}
