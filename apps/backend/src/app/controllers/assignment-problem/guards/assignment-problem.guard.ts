import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import {CalculationMode, ProblemTable} from '@opres/shared/types';
import {isAssignmentTableSizeValid, isTableValid} from '@opres/shared/utils';
import {Request} from 'express';
import {Observable} from 'rxjs';

import {isCalculationModeValid} from '../../transport-problem/utils/calculation-mode-checker.util';

type AssignmentPhasesRequest = Request<unknown, unknown, ProblemTable, {mode: CalculationMode}>;

@Injectable()
export class AssignmentProblemGuard implements CanActivate {
  public canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest() as AssignmentPhasesRequest;

    const assignmentTable = request?.body;
    const mode = request?.query?.mode;

    if (mode && !isCalculationModeValid(mode))
      throw new NotFoundException(
        'Calculation mode not found, try one of these instead: steps, explanations, result',
      );
    if (!isTableValid(assignmentTable))
      throw new BadRequestException('Invalid assignment table data! Try another one.');
    if (!isAssignmentTableSizeValid(assignmentTable))
      throw new BadRequestException('Invalid assignment table data! Try another one.');

    return true;
  }
}
