import { Rating } from './../../models/rating';
import { Language } from './../../models/language';
import { RatingComponent } from './../rating/rating.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageComponent } from './language.component';

describe('LanguageComponent', () => {
  let component: LanguageComponent;
  let fixture: ComponentFixture < LanguageComponent > ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [LanguageComponent, RatingComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageComponent);
    component = fixture.componentInstance;
    component.language = new Language();
    component.language.rating = new Rating();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
