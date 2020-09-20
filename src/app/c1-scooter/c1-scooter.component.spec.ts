import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C1ScooterComponent } from './c1-scooter.component';

describe('C1ScooterComponent', () => {
  let component: C1ScooterComponent;
  let fixture: ComponentFixture<C1ScooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C1ScooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C1ScooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
