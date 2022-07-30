import {TransportTable} from '@opres/shared/types';

import {transport} from '../transport.util';

describe('TransportUtil', () => {
  const resultTableMock: TransportTable = [
    {
      '0': {cost: 8},
      '1': {cost: 7},
      '2': {cost: 3},
      '3': {cost: 2, transported: 15},
    },
    {
      '0': {cost: 1, transported: 18},
      '1': {cost: 4},
      '2': {cost: 2, transported: 25},
      '3': {cost: 5},
    },
    {
      '0': {cost: 2},
      '1': {cost: 3, transported: 13},
      '2': {cost: 4, transported: 10},
      '3': {cost: 7, transported: 5},
    },
    {
      '0': {cost: 1},
      '1': {cost: 1, transported: 19},
      '2': {cost: 4},
      '3': {cost: 4},
    },
  ];
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
