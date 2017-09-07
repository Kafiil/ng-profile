import { StudyService } from './../../services/study/study.service';
import { Study } from './../../models/study';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  @Input('studies') studies: Study[];
  constructor(private studyService: StudyService) {
  }

  ngOnInit() {
    this.studies = this.studyService.getStudies();
  }

}
