import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainOPDManagementComponent } from './main-opdmanagement.component';

describe('MainOPDManagementComponent', () => {
  let component: MainOPDManagementComponent;
  let fixture: ComponentFixture<MainOPDManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainOPDManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainOPDManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
