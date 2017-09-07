import { ExperienceService } from './../../services/experience/experience.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  experiences: any;
  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.experiences = this.experienceService.getExperiences();
  }

}
