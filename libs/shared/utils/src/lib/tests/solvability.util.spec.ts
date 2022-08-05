import {checkSolvability} from '../solvability.util';

import {
  invalidTpDataMock,
  tpDataFirstMock,
  tpDataSecondMock,
} from './transport-problem.mock';

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
