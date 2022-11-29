import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CvServiceService } from 'src/app/services/cv-service.service';
import { Personne } from '../Model/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne | null = null;
  @Output() selectItem = new EventEmitter<Personne>();
  color = 'grey';
  font = 'Monaco';
  size = 18;
  constructor(private cvService : CvServiceService) {}

  ngOnInit() {}
  itemSelected() {
    if(this.personne)
    this.cvService.passValue(this.personne);

  }
}
