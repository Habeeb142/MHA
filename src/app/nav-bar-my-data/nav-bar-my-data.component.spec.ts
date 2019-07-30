import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarMyDataComponent } from './nav-bar-my-data.component';

describe('NavBarMyDataComponent', () => {
  let component: NavBarMyDataComponent;
  let fixture: ComponentFixture<NavBarMyDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarMyDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarMyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
