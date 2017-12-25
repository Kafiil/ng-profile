import { DataService } from './../../services/data/data.service';
import { Contact } from './../../models/contact';
import { Component, OnInit } from '@angular/core';

import 'rxjs/Rx';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private dataService: DataService) {}
  contacts: Contact[];

  ngOnInit() {
    this.dataService.getContacts()
      .subscribe(res => {
        this.contacts = res.filter(e => e.display);
      });
  }

}
