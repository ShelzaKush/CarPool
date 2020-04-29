import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffHeaderComponent } from './off-header.component';

describe('OffHeaderComponent', () => {
  let component: OffHeaderComponent;
  let fixture: ComponentFixture<OffHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
