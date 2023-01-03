import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  @Input() set appStyle(styles: Object) {
    let entries = Object.entries(styles);
    // console.log(entries);

    entries.map((el) =>
      this.renderer.setStyle(this.element.nativeElement, el[0], el[1])
    );
  }

  constructor(private element: ElementRef, private renderer: Renderer2) {}
}
