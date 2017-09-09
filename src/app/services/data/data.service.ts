
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class DataService {


  constructor(private http: Http) { }

  getExperiences() {
    return this.getLocalJson('experiences');
  }

  getProjects() {
    return this.getLocalJson('projects');
  }

  getLanguages() {
    return this.getLocalJson('languages');
  }

  getStudies() {
    return this.getLocalJson('studies');
  }
  getSkills() {
    return this.getLocalJson('skills');
  }

  getContacts() {
    return this.getLocalJson('contacts');
  }

  getSections() {
    return this.http.get(`assets/data/sections.json`)
      .map(res => res.json());
  }

  getLocalJson(filename: string): Observable<any> {
    return this.http.get(`assets/data/${filename}.json`)
      .map(res => res.json());
  }




}
