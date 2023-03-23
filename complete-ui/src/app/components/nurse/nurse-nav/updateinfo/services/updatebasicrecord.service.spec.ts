import { TestBed } from '@angular/core/testing';

import { UpdatebasicrecordService } from './updatebasicrecord.service';

describe('UpdatebasicrecordService', () => {
  let service: UpdatebasicrecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatebasicrecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
