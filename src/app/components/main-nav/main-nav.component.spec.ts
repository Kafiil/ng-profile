import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavComponent } from './main-nav.component';
import { DataService } from '../../services/data/data.service';
import { HttpModule } from '@angular/http';

describe('MainNavComponent', () => {
  let component: MainNavComponent;
  let fixture: ComponentFixture < MainNavComponent > ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [MainNavComponent],
        providers: [DataService],
        imports: [HttpModule]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
