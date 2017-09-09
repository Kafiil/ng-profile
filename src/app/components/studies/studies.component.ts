import { DataService } from './../../services/data/data.service';
import { Study } from './../../models/study';
import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/Rx';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  @Input('studies') studies: Study[];
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getStudies().subscribe(v => {
      this.studies = v;
    });
  }

}
