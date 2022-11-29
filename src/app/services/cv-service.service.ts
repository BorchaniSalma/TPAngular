import { Injectable } from '@angular/core';
import { Personne } from '../cvTech/Model/personne';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CvServiceService {
  personnes: Personne[];
  constructor() {
    this.personnes = [
      new Personne(1, 'Borchani', 'Salma', 22, 'salma.jpg', 111125, 'student'),
      new Personne(2, 'Bezine', 'Amira', 22, 'amira.jpg', 548411, 'student'),
      new Personne(3, 'Ben mim', 'Samer', 3, 'samer.jpg', 5451, 'student'),
      new Personne(4, 'Random', 'Person', 5, ' ', 5451, 'student'),
    ];
  } 
  public CvSubject = new Subject<Personne>();

  passValue(data :  Personne) {
    this.CvSubject.next(data);
  }


  getPersonnes(): Personne[] {
    return this.personnes;
  }
  getPersonneById(id: number): Personne {
    return this.personnes.find((p) => p.id == id);
  }
  deletePersonneById(id: number): void {
    this.personnes = this.personnes.filter((p) => p.id != id);
  }
  addPersonne(personne:Personne):void{
   this.personnes.push(personne);
  }

}
