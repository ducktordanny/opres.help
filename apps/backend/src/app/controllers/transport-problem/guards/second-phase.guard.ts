import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import {CalculationMode, TransportTable} from '@opres/shared/types';
import {isTransportTableValid} from '@opres/shared/utils';
import {Request} from 'express';
import {Observable} from 'rxjs';

import {isCalculationModeValid} from '../utils/calculation-mode-checker.util';

type SecondPhaseRequest = Request<
  unknown,
  unknown,
  TransportTable,
  {mode?: CalculationMode}
>;

@Injectable()
export class SecondPhaseGuard implements CanActivate {
  public canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest() as SecondPhaseRequest;

    const transportTable = request?.body;
    const mode = request?.query?.mode;

    if (mode && !isCalculationModeValid(mode))
      throw new NotFoundException(
        'Calculation mode not found, try one of these instead: steps, explanations, result',
      );
    if (!isTransportTableValid(transportTable))
      throw new BadRequestException(
        'Invalid transportation table! Try another one.',
      );

    return true;
  }
}
