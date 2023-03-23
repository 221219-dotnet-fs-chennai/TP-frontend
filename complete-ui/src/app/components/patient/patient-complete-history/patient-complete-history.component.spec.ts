import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCompleteHistoryComponent } from './patient-complete-history.component';

describe('PatientCompleteHistoryComponent', () => {
  let component: PatientCompleteHistoryComponent;
  let fixture: ComponentFixture<PatientCompleteHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientCompleteHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientCompleteHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
