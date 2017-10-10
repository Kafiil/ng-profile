import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: '[app-project]',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input('project') project: Project;
  constructor() {}

  ngOnInit() {
    this.project.image = 'assets/img/Projects/' + this.project.image +
      '/main.png';
  }

}
