import {Injectable} from '@nestjs/common';

import {Table} from '@opres/shared/types';

@Injectable()
export class SecondPhaseService {
  public calculate(assignmentTable: Table): Table {
    return [] as Table; // todo wip
  }
}
