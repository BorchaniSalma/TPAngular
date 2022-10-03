import { Component, OnInit } from '@angular/core';
import { Personne } from '../Model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedPersonne: Personne | null = null;
  constructor() {}
  personnes: Personne[] = [
    new Personne(1, 'Borchani', 'Salma', 22, 'salma.jpg', 111125, 'student'),
    new Personne(2, 'Bezine', 'Amira', 22, 'amira.jpg', 548411, 'student'),
    new Personne(3, 'Ben mim', 'Samer', 3, 'samer.jpg', 5451, 'student'),
  ];
  getPersonnes(): Personne[] {
    return this.personnes;
  }

  ngOnInit() {}
  selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }
}
