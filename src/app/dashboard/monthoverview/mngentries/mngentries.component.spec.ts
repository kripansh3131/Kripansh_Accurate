import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MngentriesComponent } from './mngentries.component';

describe('MngentriesComponent', () => {
  let component: MngentriesComponent;
  let fixture: ComponentFixture<MngentriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MngentriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MngentriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
