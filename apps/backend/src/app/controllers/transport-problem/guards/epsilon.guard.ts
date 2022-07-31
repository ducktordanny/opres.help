import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';

import {TransportTable} from '@opres/shared/types';
import {isTransportTableValid} from '@opres/shared/utils';
import {Request} from 'express';
import {Observable} from 'rxjs';

type EpsilonRequest = Request<
  unknown,
  unknown,
  TransportTable,
  {explanation?: string}
>;

@Injectable()
export class EpsilonGuard implements CanActivate {
  public canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest() as EpsilonRequest;

    const transportTable = request?.body;
    const explanation = request?.query?.explanation;

    if (explanation && explanation !== 'true' && explanation !== 'false')
      throw new BadRequestException(
        'Invalid explanation mode! Try: true or false',
      );
    if (!isTransportTableValid(transportTable))
      throw new BadRequestException(
        'Invalid transportation table! Try another one.',
      );

    return true;
  }
}
