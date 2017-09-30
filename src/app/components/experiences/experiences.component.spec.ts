import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesComponent } from './experiences.component';
import { ExperienceComponent } from '../experience/experience.component';
import { DataService } from '../../services/data/data.service';
import { HttpModule } from '@angular/http';

describe('ExperiencesComponent', () => {
  let component: ExperiencesComponent;
  let fixture: ComponentFixture < ExperiencesComponent > ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ExperiencesComponent,
          ExperienceComponent
        ],
        providers: [DataService],
        imports: [HttpModule]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
