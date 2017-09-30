import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { Contact } from '../../models/contact';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture < ContactComponent > ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ContactComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    component.contact = new Contact();
    component.size = null;

    fixture.detectChanges();
  });

  it('size should be set to 2 if no size is provided', () => {
    expect(component.size).toBe(2);
  });
});
