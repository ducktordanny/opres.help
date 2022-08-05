import {Table} from '@opres/shared/types';
import {TransportTable} from '@opres/shared/types';

import {createResultTableFrom} from '../result-table.util';

describe('ResultTableUtil', () => {
  const baseCostsMock: Table = [
    {'0': 12, '1': 22, '2': 9},
    {'0': 2, '1': 10, '2': 11},
  ];
  const convertedMock: TransportTable = [
    {'0': {cost: 12}, '1': {cost: 22}, '2': {cost: 9}},
    {'0': {cost: 2}, '1': {cost: 10}, '2': {cost: 11}},
  ];

  it('should convert costs successfully', () => {
    const result = createResultTableFrom(baseCostsMock);
    expect(result).toEqual(convertedMock);
  });
});
