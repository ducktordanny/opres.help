import {
  invalidTpDataMock,
  tpDataFirstMock,
  tpDataSecondMock,
} from '@opres/shared/data/mocks';

import {checkSolvability} from '../solvability.util';

describe('SolvabilityUtil', () => {
  it('should be solvable 1', () => {
    const result = checkSolvability(tpDataFirstMock);
    expect(result).toEqual(true);
  });

  it('should be solvable 1', () => {
    const result = checkSolvability(tpDataSecondMock);
    expect(result).toEqual(true);
  });

  it('should not be solvable', () => {
    const result = checkSolvability(invalidTpDataMock);
    expect(result).toEqual(false);
  });
});
