import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CvService} from '../services/cv.service';
import {Personne} from "../Model/personne";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne[];
  constructor(
    private cvService: CvService
  ) { }
  @Output() sendPersonneToCv = new EventEmitter();

  ngOnInit() {
    this.personnes = this.cvService.getPersonnes();
  }
  sendItem(personne: Personne) {
    this.sendPersonneToCv.emit(personne);
  }

}
