import { DataService } from './../../services/data/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year: number;
  author: string;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.year = new Date().getFullYear();

    this.dataService.getInfo()
      .subscribe(res => this.author = res.name);
  }

}
