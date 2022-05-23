import {TestBed} from '@angular/core/testing';

import {TransportProblemService} from '../transport-problem.service';

import {
  invalidTpDataMock,
  resultMock,
  tpDataMock,
} from './transport-problem.mock';

describe('TransportProblemService', () => {
  let transportProblemService: TransportProblemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransportProblemService],
    });
    transportProblemService = TestBed.inject(TransportProblemService);
  });

  it('should be created', () =>
    expect(transportProblemService).toBeInstanceOf(TransportProblemService));

  it('should check default values', () => {
    expect(transportProblemService.shops$.value).toEqual(4);
    expect(transportProblemService.storages$.value).toEqual(4);
  });

  it('should calculate problem with north-west method', () => {
    const result = transportProblemService.northWest(tpDataMock);
    expect(result.table[0][0].transported).toEqual(
      resultMock.table[0][0].transported,
    );
    expect(result.table[1][0].transported).toEqual(
      resultMock.table[1][0].transported,
    );
    expect(result.table[1][1].transported).toEqual(
      resultMock.table[1][1].transported,
    );
    expect(result.table[1][2].transported).toEqual(
      resultMock.table[1][2].transported,
    );
    expect(result.table[2][2].transported).toEqual(
      resultMock.table[2][2].transported,
    );
    expect(result.table[2][3].transported).toEqual(
      resultMock.table[2][3].transported,
    );
    expect(result.table[3][3].transported).toEqual(
      resultMock.table[3][3].transported,
    );
    expect(result.epsilon).toEqual(resultMock.epsilon);
  });

  it(`should get epsilon's value`, () => {
    const epsilon = transportProblemService.getEpsilon(resultMock.table);
    expect(epsilon).toEqual(resultMock.epsilon);
  });

  it('should be solvable', () =>
    expect(transportProblemService.checkSolvability(tpDataMock)).toEqual(true));

  it('should not be solvable', () =>
    expect(transportProblemService.checkSolvability(invalidTpDataMock)).toEqual(
      false,
    ));
});
