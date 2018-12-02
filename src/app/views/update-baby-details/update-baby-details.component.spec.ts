import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBabyDetailsComponent } from './update-baby-details.component';

describe('UpdateBabyDetailsComponent', () => {
  let component: UpdateBabyDetailsComponent;
  let fixture: ComponentFixture<UpdateBabyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBabyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBabyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
