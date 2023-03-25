import { TestBed } from '@angular/core/testing';

import { GetAllDoctorsService } from './get-all-doctors.service';

describe('GetAllDoctorsService', () => {
  let service: GetAllDoctorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllDoctorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
