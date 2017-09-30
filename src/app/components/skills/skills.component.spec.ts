import { HttpModule } from '@angular/http';
import { DataService } from './../../services/data/data.service';
import { SkillComponent } from './../skill/skill.component';
import { Skill } from './../../models/skill';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture < SkillsComponent > ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [SkillsComponent,
          SkillComponent
        ],
        providers: [DataService],
        imports: [HttpModule]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
