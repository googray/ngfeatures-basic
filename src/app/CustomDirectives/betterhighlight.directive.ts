import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]',
})
export class BetterhighlightDirective implements OnInit {
  @Input() public defaultColor: string = 'transparent';
  @Input('appBetterhighlight') public highlightColor: string = 'pink';
  @Input() public title: string = 'This is title';

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style.backgroundColor') background: string = this.defaultColor;
  @HostBinding('style.border') border: string = 'none';

  ngOnInit() {
    this.background = this.defaultColor;
  }

  @HostListener('mouseenter') mousein() {
    this.background = this.highlightColor;
    this.border = '3px solid red';
  }
  @HostListener('mouseleave') mouseout() {
    this.background = this.defaultColor;
    this.border = 'none';
  }
}
