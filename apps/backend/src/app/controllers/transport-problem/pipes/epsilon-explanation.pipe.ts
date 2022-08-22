import {Injectable, PipeTransform} from '@nestjs/common';

@Injectable()
export class EpsilonExplanationPipe implements PipeTransform {
  public transform(value: string): boolean {
    return value === 'true' || value === '' || value === undefined;
  }
}
