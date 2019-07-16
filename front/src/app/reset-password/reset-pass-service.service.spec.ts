import { TestBed } from '@angular/core/testing';

import { ResetPassServiceService } from './reset-pass-service.service';

describe('ResetPassServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResetPassServiceService = TestBed.get(ResetPassServiceService);
    expect(service).toBeTruthy();
  });
});
