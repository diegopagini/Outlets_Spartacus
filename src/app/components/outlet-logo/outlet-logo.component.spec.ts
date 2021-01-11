import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletLogoComponent } from './outlet-logo.component';

describe('OutletLogoComponent', () => {
  let component: OutletLogoComponent;
  let fixture: ComponentFixture<OutletLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
