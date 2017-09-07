import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudieComponent } from './studie.component';

describe('StudieComponent', () => {
  let component: StudieComponent;
  let fixture: ComponentFixture<StudieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
