import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHealthComponent } from './add-health.component';

describe('AddHelathComponent', () => {
  let component: AddHealthComponent;
  let fixture: ComponentFixture<AddHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHealthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
