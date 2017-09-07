import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-labels',
  templateUrl: './list-labels.component.html',
  styleUrls: ['./list-labels.component.css']
})
export class ListLabelsComponent implements OnInit {
  @Input() data;
  @Input() color: string;
  @Input() title: string;
  constructor() { }

  ngOnInit() {
    if (!this.color) {
      this.color = 'primary';
    }
  }

}
