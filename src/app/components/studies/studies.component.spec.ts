import { HttpModule } from '@angular/http';
import { DataService } from './../../services/data/data.service';
import { StudieComponent } from './../studie/studie.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesComponent } from './studies.component';

describe('StudiesComponent', () => {
  let component: StudiesComponent;
  let fixture: ComponentFixture<StudiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudiesComponent,
        StudieComponent
      ],
      providers: [DataService],
      imports: [HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
