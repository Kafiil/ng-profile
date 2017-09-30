import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsComponent } from './contacts.component';
import { ContactComponent } from '../contact/contact.component';
import { HttpModule } from '@angular/http';
import { DataService } from '../../services/data/data.service';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture < ContactsComponent > ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ContactsComponent,
          ContactComponent
        ],
        providers: [DataService],
        imports: [HttpModule]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
