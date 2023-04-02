import { TestBed } from '@angular/core/testing';

import { CompleteInfoService } from './complete-info.service';

describe('CompleteInfoService', () => {
  let service: CompleteInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompleteInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
