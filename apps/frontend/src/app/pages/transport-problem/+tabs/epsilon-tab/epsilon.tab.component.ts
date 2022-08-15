import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {Epsilon, Table, TransportTable} from '@opres/shared/types';
import {InputTableService} from '@opres/ui/tables';
import {mapValues} from 'lodash';
import {BehaviorSubject, Observable} from 'rxjs';

import {TransportProblemService} from '../../transport-problem.service';

@Component({
  selector: 'epsilon-tab',
  templateUrl: './epsilon.tab.template.html',
  styleUrls: ['../tabs.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpsilonTabComponent {
  public firstStepFormGroup: FormGroup;
  public costs$ = new BehaviorSubject<Table>([
    {'0': 8, '1': 7, '2': 3, '3': 2},
    {'0': 1, '1': 4, '2': 2, '3': 5},
    {'0': 2, '1': 3, '2': 4, '3': 7},
    {'0': 1, '1': 1, '2': 4, '3': 4},
  ]);
  public transportations$ = new BehaviorSubject<Table>([
    {'0': null, '1': null, '2': null, '3': 15},
    {'0': 8, '1': null, '2': 35, '3': null},
    {'0': 10, '1': 13, '2': null, '3': 5},
    {'0': null, '1': 19, '2': null, '3': null},
  ]);
  public result$ = new Observable<Epsilon>();

  constructor(
    private transportProblemService: TransportProblemService,
    private inputTableService: InputTableService,
  ) {
    this.firstStepFormGroup = new FormGroup({
      shops: new FormControl(4, transportProblemService.tableSizeValidators),
      storages: new FormControl(4, transportProblemService.tableSizeValidators),
    });
  }

  public onCostsChange(table: Table): void {
    this.costs$.next(table);
  }

  public onTransportationsChange(table: Table): void {
    this.transportations$.next(table);
  }

  public onCostsClear(): void {
    this.inputTableService.clear('costs');
  }

  public onTransportationsClear(): void {
    this.inputTableService.clear('transportations');
  }

  public onCalculate($event: Event): void {
    const transportTable = this.getTransportTableFromCurrentInput();
    this.result$ =
      this.transportProblemService.getEpsilonResult(transportTable);
  }

  private getTransportTableFromCurrentInput(): TransportTable {
    const transportations = this.transportations$.getValue();
    return this.costs$.getValue().map((row, index) => {
      return mapValues(row, (cost, key) => ({
        cost: cost as number,
        transported: transportations[index][key] as number,
      }));
    });
  }
}
