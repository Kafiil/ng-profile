import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-features',
  templateUrl: './main-features.component.html',
  styleUrls: ['./main-features.component.css']
})
export class MainFeaturesComponent implements OnInit {
  @Input('features') features: any[];
  constructor() { }

  ngOnInit() {
  }

}
