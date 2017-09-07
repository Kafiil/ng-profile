import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbieComponent } from './hobbie.component';

describe('HobbieComponent', () => {
  let component: HobbieComponent;
  let fixture: ComponentFixture<HobbieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
