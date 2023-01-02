import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() set appHighlight(condition: boolean) {
    if (condition) {
      this.render.addClass(this.element.nativeElement, 'highlight');
    }
  }

  constructor(private element: ElementRef, private render: Renderer2) {}
}
