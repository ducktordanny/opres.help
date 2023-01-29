import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {ProblemTable, TransportTable} from '@opres/shared/types';
import {InputTableService} from '@opres/ui/tables';
import {LanguageSwitcherService} from '@frontend/components/layout/language-switcher/language-switcher.service';
import {LoadingHandlerService} from '@frontend/services/loading-handler.service';
import {forEach, mapValues} from 'lodash';
import {BehaviorSubject} from 'rxjs';

import {transportProblemCacheBuster$, TransportProblemService} from '../transport-problem.service';

@Component({
  selector: 'first-phase-result-input',
  templateUrl: './first-phase-result-input.template.html',
  styleUrls: ['../+tabs/tabs.style.scss', './first-phase-result-input.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstPhaseResultInputComponent {
  @Output() public calculate = new EventEmitter<TransportTable>();
  public firstStepFormGroup: FormGroup;
  public secondStepFormGroup: FormGroup;
  public costs$ = new BehaviorSubject<ProblemTable>([
    {'0': 8, '1': 7, '2': 3, '3': 2},
    {'0': 1, '1': 4, '2': 2, '3': 5},
    {'0': 2, '1': 3, '2': 4, '3': 7},
    {'0': 1, '1': 1, '2': 4, '3': 4},
  ]);
  public transportations$ = new BehaviorSubject<ProblemTable>([
    {'0': null, '1': null, '2': null, '3': 15},
    {'0': 8, '1': null, '2': 35, '3': null},
    {'0': 10, '1': 13, '2': null, '3': 5},
    {'0': null, '1': 19, '2': null, '3': null},
  ]);
  public isLoading$ = this.loadingHandler.isLoading;

  constructor(
    private transportProblemService: TransportProblemService,
    private languageSwitcherService: LanguageSwitcherService,
    private inputTableService: InputTableService,
    private loadingHandler: LoadingHandlerService,
  ) {
    this.firstStepFormGroup = new FormGroup({
      shops: new FormControl(4, transportProblemService.tableSizeValidators),
      storages: new FormControl(4, transportProblemService.tableSizeValidators),
    });
    this.secondStepFormGroup = new FormGroup({});
  }

  public onCostsChange(table: ProblemTable): void {
    this.costs$.next(table);
    transportProblemCacheBuster$.next();
    this.validateCostsTable();
  }

  public onTransportationsChange(table: ProblemTable): void {
    this.transportations$.next(table);
    transportProblemCacheBuster$.next();
    this.validateTransportationsTable();
  }

  public onCostsClear(): void {
    this.inputTableService.clear('costs');
  }

  public onTransportationsClear(): void {
    this.inputTableService.clear('transportations');
  }

  public onCalculate(): void {
    this.calculate.emit(this.getTransportTableFromCurrentInput());
  }

  private getTransportTableFromCurrentInput(): TransportTable {
    const transportations = this.transportations$.getValue();
    return this.costs$.getValue().map((row, index) => {
      return mapValues(row, (cost, key) => ({
        cost: cost as number,
        transported: transportations[index][key] || undefined,
      }));
    });
  }

  private validateCostsTable(): void {
    const costs = this.costs$.getValue();
    let hasNullCost = false;

    for (const row of costs)
      forEach(row, (cost) => {
        if (cost === null || cost === undefined) hasNullCost = true;
      });

    if (hasNullCost) this.firstStepFormGroup.setErrors({nullCost: true});
    else this.firstStepFormGroup.setErrors(null);
  }

  private validateTransportationsTable(): void {
    const transportations = this.transportations$.getValue();
    let hasTransported = false;

    for (const row of transportations)
      forEach(row, (transport) => {
        if (transport) hasTransported = true;
      });

    if (!hasTransported) this.secondStepFormGroup.setErrors({noTransport: true});
    else this.secondStepFormGroup.setErrors(null);
  }
}
