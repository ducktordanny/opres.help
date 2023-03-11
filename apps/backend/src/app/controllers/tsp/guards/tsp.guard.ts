import {BadRequestException, CanActivate, ExecutionContext, Injectable} from '@nestjs/common';

import {ProblemTable} from '@opres/shared/types';
import {Request} from 'express';
import {isEmpty, values} from 'lodash';
import {Observable} from 'rxjs';

type TspRequest = Request<unknown, unknown, ProblemTable, unknown>;

@Injectable()
export class TspGuard implements CanActivate {
  public canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest() as TspRequest;
    const tspTable = request.body;

    if (!this.isTspTable(tspTable))
      throw new BadRequestException(
        'Invalid table. Try another one! Note that in the Xth row the Xth cell should be null.',
      );

    return true;
  }

  private isTspTable(table: ProblemTable): boolean {
    if (!table || isEmpty(table)) return false;

    for (const [rowIndex, row] of table.entries())
      for (const [cellIndex, cell] of values(row).entries()) {
        if (rowIndex === cellIndex && cell !== null) return false;
        else if (rowIndex !== +cellIndex && typeof cell !== 'number') return false;
      }

    return true;
  }
}
