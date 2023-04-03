import { TestBed } from '@angular/core/testing';

import { UpdateHealthService } from './update-health.service';

describe('UpdateHealthService', () => {
  let service: UpdateHealthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateHealthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
