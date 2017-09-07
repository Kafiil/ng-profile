import { ProjectService } from './../../services/project/project.service';
import { getTestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any[];
  constructor(private projectService: ProjectService) {
    // console.log(projectService.projects);
  }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

}
