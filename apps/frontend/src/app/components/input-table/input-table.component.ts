import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export type Table = Array<{[key: string]: number | undefined}>;

@Component({
  selector: 'input-table',
  templateUrl: './input-table.template.html',
  styleUrls: ['./input-table.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTableComponent {
  public readonly rows$ = new BehaviorSubject<number>(1);
  public readonly columns$ = new BehaviorSubject<number>(1);
  public readonly rowDefinitions = new BehaviorSubject<Array<string>>([]);
  public dataSource: Observable<Table>;

  @Input() set rows(value: number | null) {
    if (value) this.rows$.next(value);
  }

  @Input() set columns(value: number | null) {
    if (value) this.columns$.next(value);
  }

  constructor() {
    this.dataSource = combineLatest([this.rows$, this.columns$]).pipe(
      map(([rows, columns]) => ({
        rowDefinitions: this.rowDefinitionsFrom(columns || 4),
        rows,
      })),
      map(({rowDefinitions, rows}) => {
        this.rowDefinitions.next(rowDefinitions);
        return this.tableSourceFrom(rows || 4, rowDefinitions);
      }),
    );
  }

  public onTableElementChange(event: any, column: any, row: any): void {
    console.log(event?.target?.value, column, row);
  }

  private tableSourceFrom(rows: number, rowDefinitions: Array<string>): Table {
    const rowContent = rowDefinitions.reduce(
      (acc, curr) => ({...acc, [curr]: null}),
      {},
    );
    return Array.from({length: rows}, () => rowContent);
  }

  private rowDefinitionsFrom = (columns: number): Array<string> =>
    Array.from({length: columns}, (_, index) => `${index}`);
}
