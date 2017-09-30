import { Contact } from './../../models/contact';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { ContactComponent } from '../contact/contact.component';
import { DataService } from '../../services/data/data.service';
import { HttpModule } from '@angular/http';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture < MainComponent > ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [MainComponent, ContactComponent],
        providers: [DataService],
        imports: [HttpModule]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
