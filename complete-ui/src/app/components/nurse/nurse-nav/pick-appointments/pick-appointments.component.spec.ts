import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickAppointmentsComponent } from './pick-appointments.component';

describe('PickAppointmentsComponent', () => {
  let component: PickAppointmentsComponent;
  let fixture: ComponentFixture<PickAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickAppointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
