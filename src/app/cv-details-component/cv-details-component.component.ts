import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../cvTech/Model/personne';
import { CvServiceService } from '../services/cv-service.service';

@Component({
  selector: 'app-cv-details-component',
  templateUrl: './cv-details-component.component.html',
  styleUrls: ['./cv-details-component.component.css']
})
export class CvDetailsComponentComponent implements OnInit {
  personne: Personne;
  constructor(
    private cvService: CvServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router 
    
  ) {}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.personne=  this.cvService.getPersonneById(params['id']);
      }
    )  }

delete(){
  this.cvService.deletePersonneById(this.personne.id);
  this.router.navigate(['cv']);
}
}
