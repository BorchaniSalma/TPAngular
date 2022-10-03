import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../Model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() personnes: Personne[] = [];
  constructor() {}

  @Output() sendPersonneToCv = new EventEmitter<Personne>();

  ngOnInit() {}
  sendItem(personne: Personne) {
    this.sendPersonneToCv.emit(personne);
  }
}
