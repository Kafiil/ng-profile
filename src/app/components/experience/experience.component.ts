import { Experience } from './../../models/experience';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  @Input('experience') experience: Experience;
  constructor() { }

  ngOnInit() {
  }

}
