import {TestBed} from '@angular/core/testing';

import {InputTableService} from '../input-table.service';

describe('InputTableService', () => {
  let inputTableService: InputTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputTableService],
    });
    inputTableService = TestBed.inject(InputTableService);
  });

  it('should be created', () =>
    expect(inputTableService).toBeInstanceOf(InputTableService));

  it('should clear with a key', (done) => {
    inputTableService.clear$.subscribe((key) => {
      expect(key).toEqual(['dummy-key']);
    });
    done();
    inputTableService.clear('dummy-key');
  });

  it('should clear with an array of keys', (done) => {
    inputTableService.clear$.subscribe((keys) => {
      expect(keys).toEqual(['dummy-key-0', 'dummy-key-1']);
    });
    done();
    inputTableService.clear(['dummy-key-0', 'dummy-key-1']);
  });
});
