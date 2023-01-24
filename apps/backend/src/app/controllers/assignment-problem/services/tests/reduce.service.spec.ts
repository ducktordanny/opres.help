import {
  assignmentProblemRequestBody1,
  assignmentProblemRequestBody2,
  assignmentProblemRequestBodyWithNegativeValue,
  reduceResponseMock1,
  reduceResponseMock2,
  reduceResponseMockWithNegativeValue,
} from '@opres/shared/data/mocks';
import {AssignmentProblemType} from '@opres/shared/types';

import {ReduceService} from '../reduce.service';

describe('ReduceService', () => {
  let service: ReduceService;

  beforeEach(() => {
    service = new ReduceService();
  });

  it('should calculate reduction part 1', () => {
    const response = service.calculate(assignmentProblemRequestBody1, AssignmentProblemType.Min);
    expect(response).toEqual(reduceResponseMock1);
  });

  it('should calculate reduction part 2', () => {
    const response = service.calculate(assignmentProblemRequestBody2, AssignmentProblemType.Min);
    expect(response).toEqual(reduceResponseMock2);
  });

  it('should calculate reduction with negative value', () => {
    const response = service.calculate(assignmentProblemRequestBodyWithNegativeValue, AssignmentProblemType.Min);
    expect(response).toEqual(reduceResponseMockWithNegativeValue);
  });
});
