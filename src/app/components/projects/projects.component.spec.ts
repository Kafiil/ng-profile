import { HttpModule } from '@angular/http';
import { DataService } from './../../services/data/data.service';
import { ProjectComponent } from './../project/project.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { MainFeaturesComponent } from '../main-features/main-features.component';
import { ListLabelsComponent } from '../list-labels/list-labels.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture < ProjectsComponent > ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ProjectsComponent,
          ProjectComponent,
          MainFeaturesComponent,
          ListLabelsComponent
        ],
        providers: [DataService],
        imports: [HttpModule]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
