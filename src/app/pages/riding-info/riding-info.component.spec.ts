import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RidingInfoComponent } from './riding-info.component';

describe('RidingInfoComponent', () => {
  let component: RidingInfoComponent;
  let fixture: ComponentFixture<RidingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
