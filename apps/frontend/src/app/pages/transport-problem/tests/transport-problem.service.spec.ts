import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TestBed} from '@angular/core/testing';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

import {Epsilon} from '@opres/shared/types';
import {lastOf} from '@opres/shared/utils';
import {of, throwError} from 'rxjs';

import {tableMinimumFirstResultMock} from '../mocks/table-minimum-result.mock';
import {TransportProblemService} from '../transport-problem.service';

import {tpDataFirstMock} from './transport-problem.mock';

// FIXME [2022-08-20] after having working second phase implementation modify this
describe('TransportProblemService', () => {
  const epsilonMock: Epsilon = {value: 123};
  const epsilonErrorMock = {
    statusCode: 400,
    message: 'Invalid transportation table! Try another one.',
    error: 'Bad Request',
  };
  let transportProblemService: TransportProblemService;
  let http: HttpClient;
  let snackbar: MatSnackBar;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MatSnackBarModule],
      providers: [TransportProblemService, HttpClient],
    });
    transportProblemService = TestBed.inject(TransportProblemService);
    http = TestBed.inject(HttpClient);
    snackbar = TestBed.inject(MatSnackBar);
  });

  it('should be created', () =>
    expect(transportProblemService).toBeInstanceOf(TransportProblemService));

  it('should request all calculations results', (done) => {
    const httpPostSpy = jest.spyOn(http, 'post').mockReturnValue(of([]));
    const epsilonSpy = jest
      .spyOn(transportProblemService, 'getEpsilonResult')
      .mockReturnValue(of(epsilonMock));
    const phaseMock = {steps: [], epsilon: epsilonMock};
    transportProblemService
      .getFullCalculationResult(tpDataFirstMock)
      .subscribe((value) => {
        expect(value.firstPhase).toEqual(phaseMock);
        expect(value.secondPhase).toEqual(phaseMock);
      });
    done();
    expect(httpPostSpy).toHaveBeenCalledTimes(2);
    expect(epsilonSpy).toHaveBeenCalledTimes(2);
  });

  it('should request second phase results', (done) => {
    const httpPostSpy = jest.spyOn(http, 'post').mockReturnValue(of([]));
    const epsilonSpy = jest
      .spyOn(transportProblemService, 'getEpsilonResult')
      .mockReturnValue(of(epsilonMock));
    transportProblemService.getSecondPhaseResult([]).subscribe((value) => {
      expect(value).toEqual({steps: [], epsilon: epsilonMock});
    });
    done();
    expect(httpPostSpy).toHaveBeenCalledTimes(1);
    expect(epsilonSpy).toHaveBeenCalledTimes(1);
  });

  it('should check epsilon result', () => {
    const httpPostSpy = jest
      .spyOn(http, 'post')
      .mockReturnValue(of(epsilonMock));
    transportProblemService
      .getEpsilonResult(lastOf(tableMinimumFirstResultMock).transportation)
      .subscribe((value) => {
        expect(value).toEqual(epsilonMock);
      });
    expect(httpPostSpy).toHaveBeenCalledTimes(1);
  });

  it('should handle error', (done) => {
    const httpPostSpy = jest
      .spyOn(http, 'post')
      .mockReturnValue(throwError(() => epsilonErrorMock));
    const snackbarSpy = jest.spyOn(snackbar, 'open');
    transportProblemService
      .getEpsilonResult(lastOf(tableMinimumFirstResultMock).transportation)
      .subscribe();
    done();
    expect(httpPostSpy).toHaveBeenCalledTimes(1);
    expect(snackbarSpy).toHaveBeenCalledTimes(1);
  });
});
