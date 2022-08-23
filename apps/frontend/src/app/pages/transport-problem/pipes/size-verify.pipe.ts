import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sizeVerify',
})
export class SizeVerifyPipe implements PipeTransform {
  public transform(value: number, min: number = 3, max: number = 8): number {
    if (value > max) return max;
    if (value < min) return min;
    return value;
  }
}
