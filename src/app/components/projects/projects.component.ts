import { DataService } from './../../services/data/data.service';
import { getTestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any[];
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getProjects()
      .subscribe(res => {
        this.projects = res;
      });
  }

}
