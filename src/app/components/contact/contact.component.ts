import { Contact } from './../../models/contact';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input('contact') contact: Contact;
  @Input('size') size: number;
  constructor() { }

  ngOnInit() {
    if ( !this.size ) {
      this.size = 2;
    }
  }

}
