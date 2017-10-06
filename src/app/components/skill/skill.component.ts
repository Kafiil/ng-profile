import { Skill } from './../../models/skill';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  @Input('skill') skill: Skill;
  color: string;
  constructor() {}

  ngOnInit() {
    this.initSkillColor();
  }
  initSkillColor(): any {
    if (this.skill.rate < 25) {
      this.color = 'danger';
    } else if (this.skill.rate < 50 && this.skill.rate >= 25) {
      this.color = 'warning';
    } else if (this.skill.rate < 75 && this.skill.rate >= 50) {
      this.color = 'primary';
    } else {
      this.color = 'success';
    }
  }

}
