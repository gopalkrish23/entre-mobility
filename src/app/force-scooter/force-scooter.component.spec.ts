import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForceScooterComponent } from './force-scooter.component';

describe('ForceScooterComponent', () => {
  let component: ForceScooterComponent;
  let fixture: ComponentFixture<ForceScooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForceScooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceScooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
