import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferRideDetailsComponent } from './offer-ride-details.component';

describe('OfferRideDetailsComponent', () => {
  let component: OfferRideDetailsComponent;
  let fixture: ComponentFixture<OfferRideDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferRideDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferRideDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
