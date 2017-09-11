import { DataService } from './../../services/data/data.service';
import { Language } from './../../models/language';
import { Component, OnInit, Input } from '@angular/core';

import 'rxjs/Rx';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  @Input('languages') languages: Language[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getLanguages()
      .subscribe(res => {
        this.languages = res;
      });
  }

}
