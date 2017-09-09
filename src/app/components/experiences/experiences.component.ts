import { DataService } from './../../services/data/data.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  experiences: any;
  constructor(private dataService: DataService) { }


  ngOnInit() {
    this.dataService.getExperiences()
      .subscribe(res => {
        this.experiences = res;
      });
  }

}
