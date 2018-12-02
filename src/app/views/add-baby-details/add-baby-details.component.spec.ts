import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBabyDetailsComponent } from './add-baby-details.component';

describe('AddBabyDetailsComponent', () => {
  let component: AddBabyDetailsComponent;
  let fixture: ComponentFixture<AddBabyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBabyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBabyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
