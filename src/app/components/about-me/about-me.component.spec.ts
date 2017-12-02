import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeComponent } from './about-me.component';
import { AgeService } from '../../services/age/age.service';
import { DataService } from '../../services/data/data.service';
import { HttpModule } from '@angular/http';

describe('AboutMeComponent', () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture < AboutMeComponent > ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [AboutMeComponent],
        providers: [AgeService, DataService],
        imports: [HttpModule]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
