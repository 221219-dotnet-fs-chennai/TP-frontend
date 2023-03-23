import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmAppointmentDialogComponent } from './confirm-appointment-dialog.component';

describe('ConfirmAppointmentDialogComponent', () => {
  let component: ConfirmAppointmentDialogComponent;
  let fixture: ComponentFixture<ConfirmAppointmentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmAppointmentDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmAppointmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
