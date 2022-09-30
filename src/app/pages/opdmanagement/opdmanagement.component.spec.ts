import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPDManagementComponent } from './opdmanagement.component';

describe('OPDManagementComponent', () => {
  let component: OPDManagementComponent;
  let fixture: ComponentFixture<OPDManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPDManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OPDManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
