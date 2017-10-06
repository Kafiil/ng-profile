import { Info } from './../../models/info';
import { DataService } from './../../services/data/data.service';
import { Component, OnInit } from '@angular/core';
import { AgeService } from '../../services/age/age.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  myAge: number;
  info: Info;

  constructor(private ageService: AgeService, private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.getInfo()
      .subscribe((res: any) => {
        this.info = res as Info;
        this.myAge = this.ageService.calculateAge(new Date(this.info.dateOfBirth));
      });

  }

}
