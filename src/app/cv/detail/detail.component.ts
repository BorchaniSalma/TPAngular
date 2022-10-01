import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Personne} from "../Model/personne";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToDetails() {
    const link = ['cv', this.personne.id];
    this.router.navigate(link);
  }

}
