import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarBookingComponent } from './snackbar-booking.component';

describe('SnackbarBookingComponent', () => {
  let component: SnackbarBookingComponent;
  let fixture: ComponentFixture<SnackbarBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackbarBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackbarBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
