import {
  tableMinimumFirstResultMock,
  tableMinimumSecondResultMock,
  tpDataFirstMock,
  tpDataSecondMock,
} from '@opres/shared/data/mocks';

import {TableMinimumMethodService} from '../table-minimum.method.service';

describe('NorthWestMethodService', () => {
  let service: TableMinimumMethodService;

  beforeEach(() => {
    service = new TableMinimumMethodService();
  });

  it('should be created', () =>
    expect(service).toBeInstanceOf(TableMinimumMethodService));

  it('should calculate a transport problem part 1', () => {
    const result = service.calculate(tpDataFirstMock, 'explanations');
    expect(result).toEqual(tableMinimumFirstResultMock);
  });

  it('should calculate a transport problem part 2', () => {
    const result = service.calculate(tpDataSecondMock, 'explanations');
    expect(result).toEqual(tableMinimumSecondResultMock);
  });
});
