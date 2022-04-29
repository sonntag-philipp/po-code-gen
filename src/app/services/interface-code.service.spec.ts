import { TestBed } from '@angular/core/testing';

import { InterfaceCodeService } from './interface-code.service';

describe('InterfaceCodeService', () => {
  let service: InterfaceCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterfaceCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
