import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPatientViewComponent } from './history-patient-view.component';

describe('HistoryPatientViewComponent', () => {
  let component: HistoryPatientViewComponent;
  let fixture: ComponentFixture<HistoryPatientViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryPatientViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryPatientViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
