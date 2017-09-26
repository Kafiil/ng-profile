import { DataService } from './../../services/data/data.service';
import { Section } from './../../models/section';
import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  sections: Section[];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getSections()
      .subscribe(res => {
        this.sections = res;
      });
  }
}
