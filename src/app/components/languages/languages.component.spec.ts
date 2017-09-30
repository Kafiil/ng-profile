import { RatingComponent } from './../rating/rating.component';
import { HttpModule } from '@angular/http';
import { DataService } from './../../services/data/data.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesComponent } from './languages.component';
import { LanguageComponent } from '../language/language.component';

describe('LanguagesComponent', () => {
  let component: LanguagesComponent;
  let fixture: ComponentFixture < LanguagesComponent > ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [LanguagesComponent,
          LanguageComponent,
          RatingComponent
        ],
        providers: [DataService],
        imports: [HttpModule]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
