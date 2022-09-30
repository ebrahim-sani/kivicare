import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPatientRegistrationComponent } from './main-patient-registration.component';

describe('MainPatientRegistrationComponent', () => {
  let component: MainPatientRegistrationComponent;
  let fixture: ComponentFixture<MainPatientRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPatientRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPatientRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
