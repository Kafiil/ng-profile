import { ListLabelsComponent } from './../list-labels/list-labels.component';
import { MainFeaturesComponent } from './../main-features/main-features.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';
import { Project } from '../../models/project';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture < ProjectComponent > ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ProjectComponent,
          MainFeaturesComponent,
          ListLabelsComponent
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    component.project = new Project();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
