import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorful-div',
  templateUrl: './colorful-div.component.html',
  styleUrls: ['./colorful-div.component.css'],
})
export class ColorfulDivComponent implements OnInit {
  color = 'orange';
  defaultCol = 'blue';
  constructor() {}

  ngOnInit() {}
  changeColor(col: any) {
    console.log(col);
    this.color = col;
  }
  resetDefaultColor() {
    this.color = this.defaultCol;
  }
}
