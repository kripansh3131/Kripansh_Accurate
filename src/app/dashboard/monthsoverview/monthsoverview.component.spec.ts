import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthsoverviewComponent } from './monthsoverview.component';

describe('MonthsoverviewComponent', () => {
  let component: MonthsoverviewComponent;
  let fixture: ComponentFixture<MonthsoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthsoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthsoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
