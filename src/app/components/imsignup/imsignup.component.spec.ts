import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMSignupComponent } from './imsignup.component';

describe('IMSignupComponent', () => {
  let component: IMSignupComponent;
  let fixture: ComponentFixture<IMSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IMSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IMSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
