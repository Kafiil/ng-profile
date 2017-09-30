import { Component, OnInit } from '@angular/core';
import { AgeService } from '../../services/age/age.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  myAge: number;

  // TODO: Make date of birth in a config file

  constructor(private ageService: AgeService) {

  }

  ngOnInit() {
    this.myAge = this.ageService.calculateAge(new Date(1990, 0, 3));
  }

}
