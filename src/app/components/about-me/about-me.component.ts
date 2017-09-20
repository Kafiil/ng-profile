import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  myAge: number;

  // TODO: Make date of birth in a config file
  calculateAge(): void {
    const bday: any = new Date(1990, 0, 3);
    const now: any = new Date();
    const diff = Math.abs(now - bday);
    this.myAge = Math.floor(Math.abs(diff) / 31556900000);
  }

  constructor() { }

  ngOnInit() {
    this.calculateAge();
  }

}
