import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personne } from '../Model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  personnes: Personne[];
  constructor() {
    this.personnes = [
      new Personne(1, 'Borchani', 'Salma', 22, 'salma.jpg', 111125, 'student'),
      new Personne(2, 'Bezine', 'Amira', 22, 'amira.jpg', 548411, 'student'),
      new Personne(3, 'Ben mim', 'Samer', 3, 'samer.jpg', 5451, 'student'),
    ];
  }

  getPersonnes(): Personne[] {
    return this.personnes;
  }
  @Output() sendPersonneToCv = new EventEmitter();

  ngOnInit() {}
  sendItem(personne: Personne) {
    this.sendPersonneToCv.emit(personne);
  }
}
