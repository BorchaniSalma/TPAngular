import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent implements OnInit {
  @Input() colorPere: string = '';
  myFavoriteColor: string = 'purple';
  @Output() ColorEmit = new EventEmitter();
  emitter() {
    this.ColorEmit.emit(this.myFavoriteColor);
  }

  constructor() {}

  ngOnInit(): void {}
}
