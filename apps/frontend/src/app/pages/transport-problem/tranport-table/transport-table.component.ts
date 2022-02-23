import {Component} from '@angular/core';

import {BehaviorSubject, Observable, of} from 'rxjs';
import {map, tap} from 'rxjs/operators';

import {TransportTableService} from './transport-table.service';

// material table object structure:
// Array<{column1: any; column2: any; ...}>

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
// ];

type TransportTable = Array<{[key: number]: number | undefined}>;

@Component({
  selector: 'transport-table',
  templateUrl: './transport-table.template.html',
  styleUrls: ['./transport-table.style.scss'],
})
export class TransportTableComponent {
  public dataSource = new BehaviorSubject<TransportTable>([]);
  public rowDefinitions = new BehaviorSubject<Array<string>>([]);

  constructor(private transportTableService: TransportTableService) {
    this.transportTableService.tableSize
      .pipe(
        map(({shops, storages}) => {
          const rowDefs: Array<string> = [];
          for (let i = 0; i < shops; i++) rowDefs.push(`h${i}`);
          return {rowDefs, storages};
        }),
        map(({rowDefs, storages}) => {
          const rowData = rowDefs.reduce(
            (acc, curr) => ({...acc, [curr]: null}),
            {},
          );
          const dataSource: TransportTable = [];
          for (let i = 0; i < storages; i++) dataSource.push(rowData);
          return {dataSource, rowDefs};
        }),
      )
      .subscribe(({dataSource, rowDefs}) => {
        this.dataSource.next(dataSource);
        this.rowDefinitions.next(rowDefs);
      });
  }

  public generateTableHeaders(headerCount: number) {
    const baseArray = [];
    for (let i = 0; i < headerCount; i++) baseArray.push(`header${i}`);
    return baseArray;
  }
}
