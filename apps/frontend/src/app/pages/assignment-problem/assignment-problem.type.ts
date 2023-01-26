import {AssignmentProblemType, Table, ZeroFindingMethod} from '@opres/shared/types';

export interface AssignmentProblemInputForm {
  table: Table;
  zeroFindingMethod?: ZeroFindingMethod;
  problemType?: AssignmentProblemType;
}
