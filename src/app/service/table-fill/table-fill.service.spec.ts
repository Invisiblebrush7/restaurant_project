import { TestBed } from '@angular/core/testing';

import { TableFillService } from './table-fill.service';

describe('TableFillService', () => {
  let service: TableFillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableFillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
