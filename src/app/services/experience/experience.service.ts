import { Experience } from './../../models/experience';
import { experiences } from './experience';
import { Injectable } from '@angular/core';

@Injectable()
export class ExperienceService {

  constructor() { }

  getExperiences() {
    return experiences;
  }
}
