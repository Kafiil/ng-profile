import { languages } from './languages';
import { Injectable } from '@angular/core';

@Injectable()
export class LanguageService {

  constructor() { }
  getLanguages() {
    return languages;
  }
}