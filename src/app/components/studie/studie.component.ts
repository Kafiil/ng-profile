import { Study } from './../../models/study';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-studie',
  templateUrl: './studie.component.html',
  styleUrls: ['./studie.component.css']
})
export class StudieComponent implements OnInit {

  @Input('study') study: Study;
  constructor() { }

  ngOnInit() {
  }

}
