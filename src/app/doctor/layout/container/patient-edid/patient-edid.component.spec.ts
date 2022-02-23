import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientEdidComponent } from './patient-edid.component';

describe('PatientEdidComponent', () => {
  let component: PatientEdidComponent;
  let fixture: ComponentFixture<PatientEdidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientEdidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientEdidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
