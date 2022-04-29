import { TestBed } from '@angular/core/testing';

import { ImplementationCodeService } from './implementation-code.service';

describe('ImplementationCodeService', () => {
  let service: ImplementationCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImplementationCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
