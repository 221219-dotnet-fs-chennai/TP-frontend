import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickJoiningDateComponent } from './pick-joining-date.component';

describe('PickJoiningDateComponent', () => {
  let component: PickJoiningDateComponent;
  let fixture: ComponentFixture<PickJoiningDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickJoiningDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickJoiningDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
