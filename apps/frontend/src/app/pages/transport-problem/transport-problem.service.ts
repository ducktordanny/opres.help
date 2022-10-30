import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Validators} from '@angular/forms';

import {
  CalculationMode,
  Epsilon,
  FirstPhaseStep,
  SecondPhaseStep,
  TPData,
  TPMethods,
  TransportTable,
} from '@opres/shared/types';
import {ErrorHandlerService} from '@frontend/services/error-handler.service';
import {last} from 'lodash';
import {Observable, Subject} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Cacheable} from 'ts-cacheable';

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

export const transportProblemCacheBuster$ = new Subject<void>();

@Injectable()
export class TransportProblemService {
  public readonly tableSizeValidators = [
    Validators.required,
    Validators.min(3),
    Validators.max(8),
  ];

  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService,
  ) {}

  public getFullCalculationResult(
    transportProblemData: TPData,
    method: TPMethods = 'north-west',
    mode: CalculationMode = 'explanations',
  ): Observable<FullCalculationResult> {
    return this.getFirstPhaseResult(transportProblemData, method, mode).pipe(
      switchMap((firstPhase) => {
        return this.getSecondPhaseResult(
          last(firstPhase.steps)?.transportation || [],
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

  @Cacheable({cacheBusterObserver: transportProblemCacheBuster$})
  public getSecondPhaseResult(
    transportTable: TransportTable,
    mode: CalculationMode = 'explanations',
  ): Observable<SecondPhaseResult> {
    const url = this.urlPrefix('second-phase');
    const params = new HttpParams().set('mode', mode);

    return this.http
      .post<Array<SecondPhaseStep>>(url, transportTable, {params})
      .pipe(
        catchError(this.errorHandler.showError),
        switchMap((steps: Array<SecondPhaseStep>) => {
          return this.getEpsilonResult(
            last(steps)?.transportation || [],
            mode === 'explanations',
          ).pipe(map((epsilon) => ({steps, epsilon} as SecondPhaseResult)));
        }),
      );
  }

  @Cacheable({cacheBusterObserver: transportProblemCacheBuster$})
  public getEpsilonResult(
    transportTable: TransportTable,
    explanation: boolean = true,
  ): Observable<Epsilon> {
    const url = this.urlPrefix('epsilon');
    const params = new HttpParams().set('explanation', explanation);
    return this.http
      .post<Epsilon>(url, transportTable, {params})
      .pipe(catchError(this.errorHandler.showError));
  }

  @Cacheable({cacheBusterObserver: transportProblemCacheBuster$})
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
        catchError(this.errorHandler.showError),
        switchMap((steps) => {
          return this.getEpsilonResult(
            last(steps)?.transportation || [],
            mode === 'explanations',
          ).pipe(map((epsilon) => ({steps, epsilon} as FirstPhaseResult)));
        }),
      );
  }

  private urlPrefix = (path: string): string =>
    `/api/transport-problem/${path}`;
}
