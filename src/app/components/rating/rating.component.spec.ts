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
    component.rating = new Rating(3, 10, true);
    fixture.detectChanges();
  });

  it('should be correctly set the empty array', () => {
    // expected 3 full stars and 1 halt full start so 10 - 3 - 1 = 6 empty stars
    expect(component.empty.length).toBe(6);
  });
});
