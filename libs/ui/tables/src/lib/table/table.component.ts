import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {ProblemTable, SelectedCell} from '@opres/shared/types';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'opres-table[tableSource]',
  templateUrl: './table.template.html',
  styleUrls: ['./table.style.scss', '../tables.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  public tableSource$ = new Observable<ProblemTable>();
  public badgeSource$ = new Observable<ProblemTable>();
  public secondaryBadgeSource$ = new Observable<ProblemTable>();
  @Input() public showZeros = true;
  @Input() public mainMarkedCells?: SelectedCell | Array<SelectedCell>;
  @Input() public markedCells?: Array<SelectedCell>;

  @Input() public set tableSource(value: Observable<ProblemTable> | ProblemTable) {
    if (Array.isArray(value)) this.tableSource$ = of(value);
    else this.tableSource$ = value;
  }

  @Input() public set badgeSource(value: Observable<ProblemTable> | ProblemTable) {
    if (Array.isArray(value)) this.badgeSource$ = of(value);
    else this.badgeSource$ = value;
  }

  @Input() public set secondaryBadgeSource(value: Observable<ProblemTable> | ProblemTable) {
    if (Array.isArray(value)) this.secondaryBadgeSource$ = of(value);
    else this.secondaryBadgeSource$ = value;
  }

  public doesCellHaveMainMark(columnIndex: number, rowIndex: number): boolean {
    if (!Array.isArray(this.mainMarkedCells))
      return this.mainMarkedCells?.x === columnIndex && this.mainMarkedCells?.y === rowIndex;
    for (const mainMark of this.mainMarkedCells)
      if (mainMark?.x === columnIndex && mainMark?.y === rowIndex) return true;
    return false;
  }

  public getCircleStepNumber(rowIndex: number, columnIndex: number): number | undefined {
    const index = this.markedCells?.findIndex(
      (cell) => cell.x === columnIndex && cell.y === rowIndex,
    );
    return index === undefined ? undefined : index + 1;
  }
}
