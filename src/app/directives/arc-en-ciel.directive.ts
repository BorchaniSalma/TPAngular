import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appArcEnCiel]',
})
export class ArcEnCielDirective {
  colors = [
    'Red',
    'orange',
    'lightyellow',
    'lightgreen',
    'lightblue',
    'indigo',
    ' violet',
  ];
  @HostBinding('style.borderColor') bordercolor = 'Red';
  @HostBinding('style.color') color = 'Red';
  constructor() {}
  @HostListener('keyup') changeColor() {
    const alea = Math.floor(Math.random() * (this.colors.length - 1));
    this.bordercolor = this.colors[alea];
    this.color = this.colors[alea];
  }
}
