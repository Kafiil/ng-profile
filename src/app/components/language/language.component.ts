import { Language } from './../../models/language';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  @Input('language') language: Language;
  constructor() { }

  ngOnInit() {
  }

}
