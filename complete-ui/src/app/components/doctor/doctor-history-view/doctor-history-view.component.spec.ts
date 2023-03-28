import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorHistoryViewComponent } from './doctor-history-view.component';

describe('DoctorHistoryViewComponent', () => {
  let component: DoctorHistoryViewComponent;
  let fixture: ComponentFixture<DoctorHistoryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorHistoryViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorHistoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
