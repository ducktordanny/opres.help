import {
  koenigAlgorithmGreedyResponseMock1,
  koenigAlgorithmGreedyResponseMock2,
  koenigAlgorithmGreedyResponseMock3,
  koenigAlgorithmHeuristicsResponseMock1,
  koenigAlgorithmHeuristicsResponseMock2,
  koenigAlgorithmHeuristicsResponseMock3,
  koenigAlgorithmRequestMock1,
  koenigAlgorithmRequestMock2,
  koenigAlgorithmRequestMock3,
} from '@opres/shared/data/mocks';
import {ZeroFindingMethod} from '@opres/shared/types';

import {KoenigAlgorithmService} from '../koenig-algorithm.service';

describe('KoenigAlgorithmService', () => {
  let service: KoenigAlgorithmService;

  beforeEach(() => {
    service = new KoenigAlgorithmService();
  });

  it('should calculate with greedy part 1', () => {
    const response = service.calculate(koenigAlgorithmRequestMock1, ZeroFindingMethod.Greedy);
    expect(response).toEqual(koenigAlgorithmGreedyResponseMock1);
  });

  it('should calculate with greedy part 2', () => {
    const response = service.calculate(koenigAlgorithmRequestMock2, ZeroFindingMethod.Greedy);
    expect(response).toEqual(koenigAlgorithmGreedyResponseMock2);
  });

  it('should calculate with greedy part 3', () => {
    const response = service.calculate(koenigAlgorithmRequestMock3, ZeroFindingMethod.Greedy);
    expect(response).toEqual(koenigAlgorithmGreedyResponseMock3);
  });

  it('should calculate with heuristics part 1', () => {
    const response = service.calculate(koenigAlgorithmRequestMock1, ZeroFindingMethod.Heuristics);
    expect(response).toEqual(koenigAlgorithmHeuristicsResponseMock1);
  });

  it('should calculate with heuristics part 2', () => {
    const response = service.calculate(koenigAlgorithmRequestMock2, ZeroFindingMethod.Heuristics);
    expect(response).toEqual(koenigAlgorithmHeuristicsResponseMock2);
  });

  it('should calculate with heuristics part 3', () => {
    const response = service.calculate(koenigAlgorithmRequestMock3, ZeroFindingMethod.Heuristics);
    expect(response).toEqual(koenigAlgorithmHeuristicsResponseMock3);
  });
});
