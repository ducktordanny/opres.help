import {TestBed} from '@angular/core/testing';

import {
  northWestFirstResultMock,
  northWestSecondResultMock,
} from '../mocks/north-west-result.mock';
import {
  tableMinimumFirstResultMock,
  tableMinimumSecondResultMock,
} from '../mocks/table-minimum-result.mock';
import {NorthWestMethodService} from '../services/first-phase/north-west.method.service';
import {TableMinimumMethodService} from '../services/first-phase/table-minimum.method.service';
import {VogelKordaMethodService} from '../services/first-phase/vogel-korda.method.service';
import {TransportProblemService} from '../transport-problem.service';

import {tpDataFirstMock, tpDataSecondMock} from './transport-problem.mock';

describe('TransportProblemService', () => {
  let transportProblemService: TransportProblemService;
  let northWestMethodService: NorthWestMethodService;
  let tableMinimumMethodService: TableMinimumMethodService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TransportProblemService,
        NorthWestMethodService,
        TableMinimumMethodService,
        VogelKordaMethodService,
      ],
    });
    transportProblemService = TestBed.inject(TransportProblemService);
    northWestMethodService = TestBed.inject(NorthWestMethodService);
    tableMinimumMethodService = TestBed.inject(TableMinimumMethodService);
  });

  it('should be created', () =>
    expect(transportProblemService).toBeInstanceOf(TransportProblemService));

  it('should calculate first phase with north-west method 1', (done) => {
    const northWestSpy = jest.spyOn(northWestMethodService, 'calculate');
    const result = transportProblemService.calculateFirstPhase(
      tpDataFirstMock,
      'north-west',
    );
    expect(northWestSpy).toHaveBeenCalledTimes(1);
    result.subscribe((value) => {
      expect(value).toHaveLength(northWestFirstResultMock.length);
      expect(value).toEqual(northWestFirstResultMock);
    });
    done();
  });

  it('should calculate first phase with north-west method 2', (done) => {
    const northWestSpy = jest.spyOn(northWestMethodService, 'calculate');
    const result = transportProblemService.calculateFirstPhase(
      tpDataSecondMock,
      'north-west',
    );
    expect(northWestSpy).toHaveBeenCalledTimes(1);
    result.subscribe((value) => {
      expect(value).toHaveLength(northWestSecondResultMock.length);
      expect(value).toEqual(northWestSecondResultMock);
    });
    done();
  });

  it('should calculate first phase with table-minimum method 1', (done) => {
    const tableMinimumSpy = jest.spyOn(tableMinimumMethodService, 'calculate');
    const result = transportProblemService.calculateFirstPhase(
      tpDataFirstMock,
      'table-min',
    );
    expect(tableMinimumSpy).toHaveBeenCalledTimes(1);
    result.subscribe((value) => {
      expect(value).toHaveLength(tableMinimumFirstResultMock.length);
      expect(value).toEqual(tableMinimumFirstResultMock);
    });
    done();
  });

  it('should calculate first phase with table-minimum method 2', (done) => {
    const tableMinimumSpy = jest.spyOn(tableMinimumMethodService, 'calculate');
    const result = transportProblemService.calculateFirstPhase(
      tpDataSecondMock,
      'table-min',
    );
    expect(tableMinimumSpy).toHaveBeenCalledTimes(1);
    result.subscribe((value) => {
      expect(value).toHaveLength(tableMinimumSecondResultMock.length);
      expect(value).toEqual(tableMinimumSecondResultMock);
    });
    done();
  });

  it(`should get epsilon's value`, () => {
    const lastIndexOfMock = northWestFirstResultMock.length - 1;
    const epsilon = transportProblemService.getEpsilon(
      northWestFirstResultMock[lastIndexOfMock].transportation,
    );
    expect(epsilon).toEqual(458);
  });
});
