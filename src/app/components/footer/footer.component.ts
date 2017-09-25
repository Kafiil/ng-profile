import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year: number;
  author:string;
  constructor() { }

  ngOnInit() {
    const today = new Date();
    this.year = today.getFullYear();

    // TODO: Get this info from local json file
    this.author = "NASDAMI Kafil";
  }

}
