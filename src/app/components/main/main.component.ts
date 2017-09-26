import { DataService } from './../../services/data/data.service';
import { Contact } from './../../models/contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  contacts: Contact[];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getContacts()
      .subscribe(res => this.contacts = res);
  }

}
