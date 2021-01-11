import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletCartComponent } from './outlet-cart.component';

describe('OutletCartComponent', () => {
  let component: OutletCartComponent;
  let fixture: ComponentFixture<OutletCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
