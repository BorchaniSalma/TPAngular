import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { CvServiceService } from 'src/app/services/cv-service.service';


@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {
  constructor(
    private cvService : CvServiceService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addPersonne(formulaire: NgForm) {
    this.cvService.addPersonne(formulaire.value)
  }

}