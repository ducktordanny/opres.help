import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TestBed} from '@angular/core/testing';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

import {
  tableMinimumFirstResultMock,
  tpDataFirstMock,
} from '@opres/shared/data/mocks';
import {Epsilon} from '@opres/shared/types';
import {last} from 'lodash';
import {of, throwError} from 'rxjs';

import {ErrorHandlerService} from '../../../services/error-handler.service';
import {
  transportProblemCacheBuster$,
  TransportProblemService,
} from '../transport-problem.service';

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
      providers: [TransportProblemService, HttpClient, ErrorHandlerService],
    });
    transportProblemService = TestBed.inject(TransportProblemService);
    http = TestBed.inject(HttpClient);
    snackbar = TestBed.inject(MatSnackBar);
    transportProblemCacheBuster$.next();
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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      .getEpsilonResult(last(tableMinimumFirstResultMock)!.transportation)
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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      .getEpsilonResult(last(tableMinimumFirstResultMock)!.transportation)
      .subscribe();
    done();
    expect(httpPostSpy).toHaveBeenCalledTimes(1);
    expect(snackbarSpy).toHaveBeenCalledTimes(1);
  });
});
