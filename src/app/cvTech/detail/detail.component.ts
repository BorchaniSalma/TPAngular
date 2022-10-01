import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from '../Model/personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne = {
    id: 1,
    name: 'Borcheni',
    firstname: 'Salma',
    age: 22,
    path: '/',
    cin: 45552,
    job: 'student',
  };
  constructor(private router: Router) {}

  ngOnInit() {}
}
