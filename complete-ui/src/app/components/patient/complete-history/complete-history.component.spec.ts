import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteHistoryComponent } from './complete-history.component';

describe('CompleteHistoryComponent', () => {
  let component: CompleteHistoryComponent;
  let fixture: ComponentFixture<CompleteHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
