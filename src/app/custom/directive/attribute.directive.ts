import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAttribute]'
})
export class AttributeDirective {
  @Input() appAttribute: string;
  testValueForViewDirective: number;

  constructor(private element: ElementRef) {
    this.testValueForViewDirective = 10;
   }
  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseenter') onmouseenter() {
    this.highlight(this.appAttribute || 'pink');
    
  }

  @HostListener('mouseleave') onmouseleave() {
    this.highlight('white');
  }
}
