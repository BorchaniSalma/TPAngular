import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from './personne';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css'],
})
export class CarteVisiteComponent implements OnInit {
  @Input() personne: Personne = {
    id: 1,
    name: 'Borcheni',
    firstname: 'Salma',
    age: 22,
    path: 'salma.jpg',
    citation: 'Man Jadda wajad',
    job: 'student',
  };
  @Output() onClickEvent: EventEmitter<string> = new EventEmitter();
  public color: any = 'yellow';
  public favoriteColor = 'Blue';
  constructor(private router: Router) {}

  ngOnInit() {}

  onClick() {
    this.onClickEvent.emit(this.favoriteColor);
  }
  showValue(value: any) {
    this.color = value;
  }
}
