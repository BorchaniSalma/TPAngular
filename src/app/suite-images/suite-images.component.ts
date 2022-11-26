import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-suite-images',
  templateUrl: './suite-images.component.html',
  styleUrls: ['./suite-images.component.css']
})
export class SuiteImagesComponent implements OnInit {
  src = "amira.jpg"
  constructor() { }
  sources = ["assets/images/samer.jpg" , "assets/images/salma.jpg" , "assets/images/amira.jpg", "assets/images/photo.jpeg"]
   observable = new Observable(
    (observer) => {
      let i = 4;
      setInterval(() => {
      if (!i) {
        i = 4;
      }
      this.src = this.sources[i-1] ;
      observer.next(i--);
      }, 1000);
    });
    
    
  ngOnInit(): void {
    this.observable.subscribe({
      next(x) {},
    }
    );
  }

}