import { Rating } from './../../models/rating';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input('size') size = 2;
  @Input('rating') rating: Rating;
  full: any[];
  empty: any[];
  constructor() { }

  ngOnInit() {

    const diff = (this.rating.half) ? 1 : 0;
    const emptySize = this.rating.total - this.rating.full - diff;

    this.full = Array(this.rating.full).fill(0);
    this.empty = Array(emptySize).fill(0);

  }

}
