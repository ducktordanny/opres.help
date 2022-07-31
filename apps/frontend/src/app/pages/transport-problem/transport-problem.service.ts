import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

import {
  CalculationMode,
  Epsilon,
  FirstPhaseStep,
  SecondPhaseStep,
  TPData,
  TPMethods,
  TransportTable,
} from '@opres/shared/types';
import {lastOf} from '@opres/shared/utils';
import {EMPTY, Observable} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

export interface FirstPhaseResult {
  steps: Array<FirstPhaseStep>;
  epsilon: Epsilon;
}

export interface SecondPhaseResult {
  steps: Array<SecondPhaseStep>;
  epsilon: Epsilon;
}

export interface FullCalculationResult {
  firstPhase: FirstPhaseResult;
  secondPhase: SecondPhaseResult;
}

interface Error {
  message?: string;
  statusCode?: number;
  error?: string;
}

@Injectable()
export class TransportProblemService {
  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

  public getFullCalculationResult(
    transportProblemData: TPData,
    method: TPMethods = 'north-west',
    mode: CalculationMode = 'explanations',
  ): Observable<FullCalculationResult> {
    return this.getFirstPhaseResult(transportProblemData, method, mode).pipe(
      switchMap((firstPhase) => {
        return this.getSecondPhaseResul(
          lastOf(firstPhase.steps).transportation,
          mode,
        ).pipe(
          map(
            (secondPhase) =>
              ({firstPhase, secondPhase} as FullCalculationResult),
          ),
        );
      }),
    );
  }

  public getSecondPhaseResul(
    transportTable: TransportTable,
    mode: CalculationMode = 'explanations',
  ): Observable<SecondPhaseResult> {
    const url = this.urlPrefix('second-phase');
    const params = new HttpParams().set('mode', mode);

    return this.http
      .post<Array<SecondPhaseStep>>(url, transportTable, {params})
      .pipe(
        catchError(this.handleError),
        switchMap((steps) => {
          return this.getEpsilonResult(
            lastOf(steps)?.transportation || [],
            mode === 'explanations',
          ).pipe(map((epsilon) => ({steps, epsilon} as FirstPhaseResult)));
        }),
      );
  }

  public getEpsilonResult(
    transportTable: TransportTable,
    explanation: boolean,
  ): Observable<Epsilon> {
    const url = this.urlPrefix('epsilon');
    const params = new HttpParams().set('explanation', explanation);
    return this.http
      .post<Epsilon>(url, transportTable, {params})
      .pipe(catchError(this.handleError));
  }

  private getFirstPhaseResult(
    transportProblemData: TPData,
    method: TPMethods = 'north-west',
    mode: CalculationMode = 'explanations',
  ): Observable<FirstPhaseResult> {
    const url = this.urlPrefix(`first-phase/${method}`);
    const params = new HttpParams().set('mode', mode);

    return this.http
      .post<Array<FirstPhaseStep>>(url, transportProblemData, {params})
      .pipe(
        catchError(this.handleError),
        switchMap((steps) => {
          return this.getEpsilonResult(
            lastOf(steps)?.transportation || [],
            mode === 'explanations',
          ).pipe(map((epsilon) => ({steps, epsilon} as FirstPhaseResult)));
        }),
      );
  }

  private handleError = (value: {error: Error}): Observable<never> => {
    const message =
      value?.error?.message || value?.error?.error || 'Something went wrong';
    this.snackbar.open(message, 'Close');
    return EMPTY;
  };

  private urlPrefix = (path: string): string =>
    `/api/transport-problem/${path}`;
}
