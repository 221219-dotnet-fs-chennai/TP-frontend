import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCompleteHistoryDocComponent } from './patient-complete-history.component';

describe('PatientCompleteHistoryComponent', () => {
  let component: PatientCompleteHistoryDocComponent;
  let fixture: ComponentFixture<PatientCompleteHistoryDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientCompleteHistoryDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientCompleteHistoryDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
