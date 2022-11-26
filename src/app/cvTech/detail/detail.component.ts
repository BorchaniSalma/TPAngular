import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmbaucheServiceService } from 'src/app/services/embauche-service.service';
import { Personne } from '../Model/personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne | null = null;
  constructor(
    private router: Router,
    private EmbaucheService: EmbaucheServiceService
  ) {}

  ngOnInit() {}
  Embaucher() {
    this.EmbaucheService.Embaucher(this.personne);
  }
  Debaucher() {
    this.EmbaucheService.Debaucher(this.personne);
  }
  info() {
    console.log("info");
    this.router.navigate(['cv', this.personne.id]);
  }
}
