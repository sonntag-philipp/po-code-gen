import { TestBed } from '@angular/core/testing';

import { BaseCodeService } from './base-code.service';

describe('BaseCodeService', () => {
  let service: BaseCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
