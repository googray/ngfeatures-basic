import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {
  constructor(private element: ElementRef, private rendrer: Renderer2) {}

  @HostListener('mouseenter') onmouseover() {
    this.rendrer.setStyle(this.element.nativeElement, 'margin', '5px 10px');
    this.rendrer.setStyle(this.element.nativeElement, 'padding', '30px 30px');
    this.rendrer.setStyle(this.element.nativeElement, 'transition', '0.5s');
  }

  @HostListener('mouseleave') onmouseoot() {
    this.rendrer.setStyle(this.element.nativeElement, 'margin', '10px 20px');
    this.rendrer.setStyle(this.element.nativeElement, 'padding', '10px 20px');
    this.rendrer.setStyle(this.element.nativeElement, 'transition', '0.5s');
  }
}
