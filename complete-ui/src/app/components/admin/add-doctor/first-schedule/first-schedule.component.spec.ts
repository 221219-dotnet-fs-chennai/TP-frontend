import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstScheduleComponent } from './first-schedule.component';

describe('FirstScheduleComponent', () => {
  let component: FirstScheduleComponent;
  let fixture: ComponentFixture<FirstScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
