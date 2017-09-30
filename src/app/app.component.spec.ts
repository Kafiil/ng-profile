import { TestBed, async } from '@angular/core/testing';

import { DataService } from './services/data/data.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { SectionsComponent } from './components/sections/sections.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FormComponent } from './components/form/form.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { HobbieComponent } from './components/hobbie/hobbie.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { LanguageComponent } from './components/language/language.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillComponent } from './components/skill/skill.component';
import { StudiesComponent } from './components/studies/studies.component';
import { StudieComponent } from './components/studie/studie.component';
import { MainComponent } from './components/main/main.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { MainFeaturesComponent } from './components/main-features/main-features.component';
import { ListLabelsComponent } from './components/list-labels/list-labels.component';
import { RatingComponent } from './components/rating/rating.component';
import { AgeService } from './services/age/age.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainNavComponent,
        SectionsComponent,
        FooterComponent,
        AboutMeComponent,
        ContactComponent,
        ExperienceComponent,
        FormComponent,
        ExperiencesComponent,
        HobbiesComponent,
        HobbieComponent,
        LanguagesComponent,
        LanguageComponent,
        ProjectsComponent,
        ProjectComponent,
        SkillsComponent,
        SkillComponent,
        StudiesComponent,
        StudieComponent,
        MainComponent,
        ContactsComponent,
        MainFeaturesComponent,
        ListLabelsComponent,
        RatingComponent
      ],
      imports: [
        BrowserModule,
        HttpModule
      ],
      providers: [DataService, AgeService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
