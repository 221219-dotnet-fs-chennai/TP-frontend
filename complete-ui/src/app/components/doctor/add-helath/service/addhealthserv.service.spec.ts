import { TestBed } from '@angular/core/testing';

import { AddhealthservService } from './addhealthserv.service';

describe('AddhealthservService', () => {
  let service: AddhealthservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddhealthservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
