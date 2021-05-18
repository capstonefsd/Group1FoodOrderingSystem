import { TestBed } from '@angular/core/testing';

import { CustomerloginauthService } from './customerloginauth.service';

describe('CustomerloginauthService', () => {
  let service: CustomerloginauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerloginauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
