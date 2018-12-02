import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBabyDetailsComponent } from './show-baby-details.component';

describe('ShowBabyDetailsComponent', () => {
  let component: ShowBabyDetailsComponent;
  let fixture: ComponentFixture<ShowBabyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBabyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBabyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
