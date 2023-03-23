import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingAlertComponent } from './booking-alert.component';

describe('BookingAlertComponent', () => {
  let component: BookingAlertComponent;
  let fixture: ComponentFixture<BookingAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
