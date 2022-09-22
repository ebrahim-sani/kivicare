import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhychooseComponent } from './whychoose.component';

describe('WhychooseComponent', () => {
  let component: WhychooseComponent;
  let fixture: ComponentFixture<WhychooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhychooseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhychooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
