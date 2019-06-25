import { TestBed } from '@angular/core/testing';

import { AuthenticateserviceService } from './authenticateservice.service';

describe('AuthenticateserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticateserviceService = TestBed.get(AuthenticateserviceService);
    expect(service).toBeTruthy();
  });
});
