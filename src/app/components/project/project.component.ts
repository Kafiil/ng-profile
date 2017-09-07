import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input('project') project: any;
  constructor() {
  }


  ngOnInit() {
    // if (this.project.inverse) {
    //   this.project.push = 'col-md-push-4';
    //   this.project.pull = 'col-md-pull-8';
    // }
  }

}
