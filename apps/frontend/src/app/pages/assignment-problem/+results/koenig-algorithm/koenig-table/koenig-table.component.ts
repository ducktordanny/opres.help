import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {
  KoenigAlgoStep,
  ProblemTable,
  SelectedCell,
  SideTableValuesByIndex,
  TableLineSelections,
} from '@opres/shared/types';
import {forEach} from 'lodash';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-koenig-table[result][sourceTable]',
  templateUrl: './koenig-table.template.html',
  styles: [
    `
      :host {
        padding: 8px;
        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: auto auto;
        gap: 8px;
        justify-content: start;
        overflow-x: auto;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KoenigTableComponent {
  @Input() sourceTable!: ProblemTable;
  public independentZeros = new BehaviorSubject<Array<SelectedCell> | null>(null);
  public rowSideTableValues = new BehaviorSubject<SideTableValuesByIndex | null>(null);
  public columnSideTableValues = new BehaviorSubject<SideTableValuesByIndex | null>(null);
  public strikeThroughs = new BehaviorSubject<TableLineSelections | null>(null);

  @Input() public set result(step: KoenigAlgoStep | null) {
    if (!step) return;
    this.independentZeros.next(step.selectedIndependentZeros);
    this.setRowSideTableValues(step);
    this.setColumnSideTableValues(step);
    if (step.strikeThroughs) this.strikeThroughs.next(step.strikeThroughs);
  }

  private setColumnSideTableValues(step: KoenigAlgoStep): void {
    const sideTableValues: SideTableValuesByIndex = {};
    if (step.reachedRows)
      this.setTableValuesByArrayOfNumbers(step.reachedRows, '+', sideTableValues);
    if (step.verifiedLines?.rows)
      this.setTableValuesByArrayOfNumbers(step.verifiedLines.rows, '*', sideTableValues);
    this.columnSideTableValues.next(sideTableValues);
  }

  private setRowSideTableValues(step: KoenigAlgoStep): void {
    const sideTableValues: SideTableValuesByIndex = {};
    if (step.columnToRowMarks)
      forEach(
        step.columnToRowMarks,
        (value, key) => (sideTableValues[key] = (value + 1).toString()),
      );
    if (step.verifiedLines?.columns)
      this.setTableValuesByArrayOfNumbers(step.verifiedLines.columns, '*', sideTableValues);
    if (step.targetColumns)
      this.setTableValuesByArrayOfNumbers(step.targetColumns, '?', sideTableValues);
    this.rowSideTableValues.next(sideTableValues);
  }

  private setTableValuesByArrayOfNumbers(
    array: Array<number>,
    sign: string,
    sideTableValues: SideTableValuesByIndex,
  ): void {
    for (const rowIndex of array)
      sideTableValues[rowIndex] = (sideTableValues[rowIndex] || '') + sign;
  }
}
