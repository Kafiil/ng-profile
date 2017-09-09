import { DataService } from './../../services/data/data.service';
import { Skill } from './../../models/skill';
import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getSkills()
      .subscribe(res => {
        this.skills = res;
      });
  }

}
