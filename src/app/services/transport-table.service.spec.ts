import {TestBed} from '@angular/core/testing';

import {TransportTableService} from './transport-table.service';

describe('TransportTableService', () => {
  let service: TransportTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransportTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
