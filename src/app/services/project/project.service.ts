import { Injectable } from '@angular/core';
import { projects } from './projects';

@Injectable()
export class ProjectService {

  constructor() {
  }

  getProjects() {
    return projects;
  }



}
