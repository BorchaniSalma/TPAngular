import { Injectable } from '@angular/core';
import {Personne} from '../Model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne[];
  constructor() {
    this.personnes = [
      new Personne(1, 'aymen',
        'sellaouti', 37, 'as.jpg', 777777, 'teacher' ),
      new Personne(2, 'ahmed',
        'mohamed', 27, 'zizou.jpeg', 11111, 'coach' ),
      new Personne(3, 'Ammar',
        'ali', 27, '       ', 11111, '404' ),
    ];
  }

  getPersonnes(): Personne[] {
    return this.personnes;
  }
}
