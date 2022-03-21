import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import {InputTableService} from '@components/input-table/input-table.service';
import {
  rowDefinitionsFrom,
  tableSourceFrom,
} from '@shared/helpers/table.helper';
import {RowDefs, Table} from '@shared/types/table.types';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {BehaviorSubject, combineLatest} from 'rxjs';
import {filter, map, tap} from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'input-table[key]',
  templateUrl: './input-table.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTableComponent {
  @Input() key = '';
  @Output() tableChange = new EventEmitter<Table>();
  public readonly rows$ = new BehaviorSubject<number>(1);
  public readonly columns$ = new BehaviorSubject<number>(1);
  public readonly rowDefinitions$ = new BehaviorSubject<RowDefs>([]);
  public readonly tableSource$ = new BehaviorSubject<Table>([]);
  private hasValues$ = new BehaviorSubject<boolean>(false);

  @Input() set rows(value: number | null) {
    if (value) this.rows$.next(value);
  }

  @Input() set columns(value: number | null) {
    if (value) this.columns$.next(value);
  }

  constructor(private inputTableService: InputTableService) {
    combineLatest([this.rows$, this.columns$])
      .pipe(
        map(([rows, columns]) => ({
          rowDefinitions: rowDefinitionsFrom(columns),
          rows,
        })),
        map(({rowDefinitions, rows}) => {
          this.rowDefinitions$.next(rowDefinitions);
          return tableSourceFrom(rows, rowDefinitions);
        }),
        tap((tableSource) => this.tableSource$.next(tableSource)),
        untilDestroyed(this),
      )
      .subscribe();

    this.inputTableService.clear$
      .pipe(
        filter(() => this.hasValues$.getValue()),
        filter((keys) => keys.some((key) => key === this.key)),
        map(() =>
          tableSourceFrom(
            this.rows$.getValue(),
            this.rowDefinitions$.getValue(),
          ),
        ),
        tap((newTableSource) => {
          this.tableSource$.next(newTableSource);
          this.hasValues$.next(false);
        }),
        untilDestroyed(this),
      )
      .subscribe();
  }

  public onTableElementChange(event: Event, column: number, row: number): void {
    const currentTable = this.tableSource$.getValue();
    currentTable[row][column] = +(<HTMLInputElement>event?.target)?.value;
    this.tableSource$.next(currentTable);
    this.tableChange.emit(currentTable);
    this.hasValues$.next(true);
  }
}