import { TestBed } from '@angular/core/testing';

import { DoctorSeviceService } from './doctor-sevice.service';

describe('DoctorSeviceService', () => {
  let service: DoctorSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
