import { studies } from './studies';
import { Injectable } from '@angular/core';

@Injectable()
export class StudyService {

  constructor() { }

  getStudies() {
    return studies;
  }
}
