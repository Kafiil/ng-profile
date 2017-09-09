import { Skill } from './../../models/skill';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input('skill') skill: Skill;
  constructor() { }

  ngOnInit() {
    this.initSkillColor();
  }
  initSkillColor(): any {
    if (this.skill.rate < 25) {
      this.skill.color = 'danger';
    } else if (this.skill.rate < 50 && this.skill.rate >= 25) {
      this.skill.color = 'warning';
    } else if (this.skill.rate < 75 && this.skill.rate >= 50) {
      this.skill.color = 'primary';
    } else {
      this.skill.color = 'success';
    }
  }

}
