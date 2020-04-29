import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RidingDetailsComponent } from './riding-details.component';

describe('RidingDetailsComponent', () => {
  let component: RidingDetailsComponent;
  let fixture: ComponentFixture<RidingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
