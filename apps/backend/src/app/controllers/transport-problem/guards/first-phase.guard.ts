import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import {CalculationMode, TPData, TPMethods} from '@opres/shared/types';
import {checkSolvability} from '@opres/shared/utils';
import {Request} from 'express';
import {Observable} from 'rxjs';

import {isCalculationModeValid} from '../utils/calculation-mode-checker.util';

type FirstPhaseRequest = Request<
  {method: TPMethods},
  unknown,
  TPData,
  {mode?: CalculationMode}
>;

@Injectable()
export class FirstPhaseGuard implements CanActivate {
  public canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest() as FirstPhaseRequest;

    const mode = request?.query?.mode;
    const method = request?.params?.method;
    const tPData = request?.body;

    if (mode && !isCalculationModeValid(mode))
      throw new NotFoundException(
        'Calculation mode not found, try one of these instead: steps, explanations, result',
      );
    if (!this.isMethodValid(method))
      throw new NotFoundException(
        'Method name not found, try one of these instead: north-west, table-min, vogel-korda',
      );
    if (!checkSolvability(tPData))
      throw new BadRequestException(
        'Invalid transportation problem data. Try another one.',
      );

    return true;
  }

  private isMethodValid(method: TPMethods): boolean {
    return ['north-west', 'table-min', 'vogel-korda'].includes(method);
  }
}
