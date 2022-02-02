import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMHomeComponent } from './imhome.component';

describe('IMHomeComponent', () => {
  let component: IMHomeComponent;
  let fixture: ComponentFixture<IMHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IMHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IMHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
