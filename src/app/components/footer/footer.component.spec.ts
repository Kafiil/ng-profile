import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { HttpModule } from '@angular/http';
import { DataService } from '../../services/data/data.service';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent],
      providers: [DataService],
      imports: [HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
