import {resultTableMock} from '@opres/shared/data/mocks';

import {transport} from '../transport.util';

describe('TransportUtil', () => {
  const demandsMock = [0, 0, 10, 5];
  const stocksMock = [0, 0, 15, 0];
  const indexMocks = 2;

  it('should transport as expected', () => {
    const [currentDemand, currentStock] = transport(
      resultTableMock,
      demandsMock,
      stocksMock,
      indexMocks,
      indexMocks,
    );
    expect(currentDemand).toEqual(10);
    expect(currentStock).toEqual(15);
  });
});
