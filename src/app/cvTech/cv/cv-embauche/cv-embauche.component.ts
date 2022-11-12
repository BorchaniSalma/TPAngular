import { Component, OnInit } from '@angular/core';
import { EmbaucheServiceService } from 'src/app/services/embauche-service.service';
import { Personne } from '../../Model/personne';

@Component({
  selector: 'app-cv-embauche',
  templateUrl: './cv-embauche.component.html',
  styleUrls: ['./cv-embauche.component.css'],
})
export class CvEmbaucheComponent implements OnInit {
  personnesEmb: Personne[];
  constructor(private EmbaucheService: EmbaucheServiceService) {}

  ngOnInit() {
    this.personnesEmb = this.EmbaucheService.getEmbauches();
  }
}
