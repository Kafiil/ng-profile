import { Rating } from './../../models/rating';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingComponent } from './rating.component';

describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture < RatingComponent > ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [RatingComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    component.rating = new Rating();
    component.rating.full = 3;
    component.rating.total = 10;
    component.rating.half = true;
    console.log(component.rating);
    fixture.detectChanges();
  });

  it('should be correctly set the empty array', () => {
    expect(component.empty.length).toBe(6);
  });
});
