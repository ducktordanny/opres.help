import {
  tspReduceRequestMock1,
  tspReduceRequestMock2,
  tspReduceResponseMock1,
  tspReduceResponseMock2,
} from '@opres/shared/data/mocks';

import {ReduceService} from '../reduce.service';

describe('ReduceService', () => {
  let service: ReduceService;

  beforeEach(() => {
    service = new ReduceService();
  });

  it('should be created', () => expect(service).toBeInstanceOf(ReduceService));

  it('should calculate result 1', () => {
    const result = service.calculate(tspReduceRequestMock1);
    expect(result).toEqual(tspReduceResponseMock1);
  });

  it('should calculate result 2', () => {
    const result = service.calculate(tspReduceRequestMock2);
    expect(result).toEqual(tspReduceResponseMock2);
  });
});
