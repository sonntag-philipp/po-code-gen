import { TestBed } from '@angular/core/testing';

import { FactoryCodeService } from './factory-code.service';

describe('FactoryCodeService', () => {
  let service: FactoryCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactoryCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
