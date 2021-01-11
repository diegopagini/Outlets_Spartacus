import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletNavigationComponent } from './outlet-navigation.component';

describe('OutletNavigationComponent', () => {
  let component: OutletNavigationComponent;
  let fixture: ComponentFixture<OutletNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
