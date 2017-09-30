import { AgeService } from './../../services/age/age.service';
import { FormComponent } from './../form/form.component';
import { ContactComponent } from './../contact/contact.component';
import { ContactsComponent } from './../contacts/contacts.component';
import { RatingComponent } from './../rating/rating.component';
import { LanguageComponent } from './../language/language.component';
import { LanguagesComponent } from './../languages/languages.component';
import { SkillComponent } from './../skill/skill.component';
import { SkillsComponent } from './../skills/skills.component';
import { StudiesComponent } from './../studies/studies.component';
import { StudieComponent } from './../studie/studie.component';
import { ExperienceComponent } from './../experience/experience.component';
import { ProjectsComponent } from './../projects/projects.component';
import { AboutMeComponent } from './../about-me/about-me.component';
import { MainComponent } from './../main/main.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsComponent } from './sections.component';
import { ProjectComponent } from '../project/project.component';
import { MainFeaturesComponent } from '../main-features/main-features.component';
import { ListLabelsComponent } from '../list-labels/list-labels.component';
import { HttpModule } from '@angular/http';
import { DataService } from '../../services/data/data.service';
import { ExperiencesComponent } from '../experiences/experiences.component';

describe('SectionsComponent', () => {
  let component: SectionsComponent;
  let fixture: ComponentFixture < SectionsComponent > ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [SectionsComponent,
          MainComponent,
          AboutMeComponent,
          ProjectsComponent,
          ProjectComponent,
          MainFeaturesComponent,
          ListLabelsComponent,
          ExperienceComponent,
          ExperiencesComponent,
          StudieComponent,
          StudiesComponent,
          SkillsComponent,
          SkillComponent,
          LanguagesComponent,
          LanguageComponent,
          RatingComponent,
          ContactsComponent,
          ContactComponent,
          FormComponent
        ],
        providers: [DataService, AgeService],
        imports: [HttpModule]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
