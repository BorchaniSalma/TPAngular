import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../Model/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne | null = null;
  @Output() selectItem = new EventEmitter<Personne>();
  constructor() {}

  ngOnInit() {}
  itemSelected() {
    if (this.personne) this.selectItem.emit(this.personne);
  }
}
