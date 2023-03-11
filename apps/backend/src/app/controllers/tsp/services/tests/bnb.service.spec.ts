import {
  tspRequestMock1,
  tspRequestMock2,
  tspResponseMock1,
  tspResponseMock2,
} from '@opres/shared/data/mocks';

import {BnbService} from '../bnb.service';

describe('BnbService', () => {
  let service: BnbService;

  beforeEach(() => {
    service = new BnbService();
  });

  it('should be created', () => expect(service).toBeInstanceOf(BnbService));

  it('should calculate result 1', () => {
    const result = service.calculate(tspRequestMock1);
    expect(result).toEqual(tspResponseMock1);
  });

  it('should calculate result 2', () => {
    const result = service.calculate(tspRequestMock2);
    expect(result).toEqual(tspResponseMock2);
  });
});
