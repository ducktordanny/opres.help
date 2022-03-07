import {ChangeDetectionStrategy, Component} from '@angular/core';

import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';

import {TransportTableService} from './transport-table.service';

@Component({
  selector: 'transport-table',
  templateUrl: './transport-table.template.html',
  styleUrls: ['./transport-table.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportTableComponent {
  public readonly shops = new BehaviorSubject<number>(4);
  public readonly storages = new BehaviorSubject<number>(4);

  constructor(private transportTableService: TransportTableService) {
    this.transportTableService.sizeChanges.subscribe(({shops, storages}) => {
      this.shops.next(shops);
      this.storages.next(storages);
    });
  }
}
