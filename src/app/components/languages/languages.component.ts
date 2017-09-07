import { languages } from './../../services/language/languages';
import { LanguageService } from './../../services/language/language.service';
import { Language } from './../../models/language';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  @Input('languages') languages: Language[];
  division: number;
  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languages = this.languageService.getLanguages();
    this.division = Math.floor(12 / this.languages.length);
  }

}
