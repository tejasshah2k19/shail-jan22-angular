import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMListUsersComponent } from './imlist-users.component';

describe('IMListUsersComponent', () => {
  let component: IMListUsersComponent;
  let fixture: ComponentFixture<IMListUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IMListUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IMListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
