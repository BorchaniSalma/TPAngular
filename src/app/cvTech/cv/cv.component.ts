import { Component, OnInit } from '@angular/core';
import { CvServiceService } from 'src/app/services/cv-service.service';
import { Personne } from '../Model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedPersonne: Personne | null = null;
  constructor(private cvService: CvServiceService) {}
  personnes: Personne[];
  getPersonnes(): Personne[] {
    return this.personnes;
  }

  ngOnInit() {
    this.personnes = this.cvService.getPersonnes();
  }
  selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }
}
