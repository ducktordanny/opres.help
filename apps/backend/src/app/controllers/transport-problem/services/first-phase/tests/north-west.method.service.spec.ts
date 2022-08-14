import {
  northWestFirstResultMock,
  northWestSecondResultMock,
  tpDataFirstMock,
  tpDataSecondMock,
} from '@opres/shared/data/mocks';

import {NorthWestMethodService} from '../north-west.method.service';

describe('NorthWestMethodService', () => {
  let service: NorthWestMethodService;

  beforeEach(() => {
    service = new NorthWestMethodService();
  });

  it('should be created', () =>
    expect(service).toBeInstanceOf(NorthWestMethodService));

  it('should calculate a transport problem part 1', () => {
    const result = service.calculate(tpDataFirstMock, 'explanations');
    expect(result).toEqual(northWestFirstResultMock);
  });

  it('should calculate a transport problem part 2', () => {
    const result = service.calculate(tpDataSecondMock, 'explanations');
    expect(result).toEqual(northWestSecondResultMock);
  });
});
