import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MngcategoriesComponent } from './mngcategories.component';

describe('MngcategoriesComponent', () => {
  let component: MngcategoriesComponent;
  let fixture: ComponentFixture<MngcategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MngcategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MngcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
