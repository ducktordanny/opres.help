import {AssignmentProblemType, ProblemTable, ZeroFindingMethod} from '@opres/shared/types';

export interface AssignmentProblemInputForm {
  table: ProblemTable;
  zeroFindingMethod?: ZeroFindingMethod;
  problemType?: AssignmentProblemType;
}
