import { Skill } from './../../models/skill';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillComponent } from './skill.component';

describe('SkillComponent', () => {
  let component: SkillComponent;
  let fixture: ComponentFixture < SkillComponent > ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [SkillComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillComponent);
    component = fixture.componentInstance;
    component.skill = new Skill();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
