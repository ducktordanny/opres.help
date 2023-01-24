import {
  assignmentProblemRequestBody1,
  assignmentProblemRequestBody2,
  assignmentProblemResponseMaximumType1,
  assignmentProblemResponseMaximumType2,
  assignmentProblemResponseWithGreedy1,
  assignmentProblemResponseWithGreedy2,
  assignmentProblemResponseWithHeuristic1,
  assignmentProblemResponseWithHeuristic2,
} from '@opres/shared/data/mocks';
import {AssignmentProblemType, ZeroFindingMethod} from '@opres/shared/types';

import {HungarianMethodService} from '../hungarian-method.service';
import {KoenigAlgorithmService} from '../koenig-algorithm.service';
import {ReduceService} from '../reduce.service';

describe('HungarianMethodService', () => {
  let reduceService: ReduceService;
  let koenigAlgorithmService: KoenigAlgorithmService;
  let service: HungarianMethodService;

  beforeEach(() => {
    reduceService = new ReduceService();
    koenigAlgorithmService = new KoenigAlgorithmService();
    service = new HungarianMethodService(koenigAlgorithmService, reduceService);
  });

  it('should be created', () => expect(service).toBeInstanceOf(HungarianMethodService));

  it('should calculate with greedy part 1', () => {
    const response = service.calculate(
      assignmentProblemRequestBody1,
      ZeroFindingMethod.Greedy,
      AssignmentProblemType.Min,
    );
    expect(response).toEqual(assignmentProblemResponseWithGreedy1);
  });

  it('should calculate with greedy part 2', () => {
    const response = service.calculate(
      assignmentProblemRequestBody2,
      ZeroFindingMethod.Greedy,
      AssignmentProblemType.Min,
    );
    expect(response).toEqual(assignmentProblemResponseWithGreedy2);
  });

  it('should calculate with heuristics part 1', () => {
    const response = service.calculate(
      assignmentProblemRequestBody1,
      ZeroFindingMethod.Heuristics,
      AssignmentProblemType.Min,
    );
    expect(response).toEqual(assignmentProblemResponseWithHeuristic1);
  });

  it('should calculate with heuristics part 2', () => {
    const response = service.calculate(
      assignmentProblemRequestBody2,
      ZeroFindingMethod.Heuristics,
      AssignmentProblemType.Min,
    );
    expect(response).toEqual(assignmentProblemResponseWithHeuristic2);
  });

  it('should calculate maximum part 1', () => {
    const response = service.calculate(
      assignmentProblemRequestBody1,
      ZeroFindingMethod.Greedy,
      AssignmentProblemType.Max,
    );
    expect(response).toEqual(assignmentProblemResponseMaximumType1);
  });

  it('should calculate maximum part 2', () => {
    const response = service.calculate(
      assignmentProblemRequestBody2,
      ZeroFindingMethod.Greedy,
      AssignmentProblemType.Max,
    );
    expect(response).toEqual(assignmentProblemResponseMaximumType2);
  });
});
