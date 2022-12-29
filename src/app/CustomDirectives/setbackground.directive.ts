import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[setBackground]',
})
export class SetBackgroundDirective implements OnInit {
  // private elemente: ElementRef;

  constructor(private element: ElementRef) {
    // element.nativeElement.style.backgroundColor = '#c8e6c9';
    // this.elemente = element;
    this.element = element;
  }

  ngOnInit() {
    // this.elemente.nativeElement.style.backgroundColor = '#c8e6c9';
    this.element.nativeElement.style.backgroundColor = '#c8e6c9';
  }
}
