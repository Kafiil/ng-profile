import { DataService } from './../../services/data/data.service';
import { Contact } from './../../models/contact';
import { Component, OnInit } from '@angular/core';
import { Info } from '../../models/info';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  contacts: Contact[];
  info: Info;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getContacts()
      .subscribe(res => this.contacts = res);
    this.dataService.getInfo()
      .subscribe(res => {
        this.info = res;
      });
  }

}
