import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlight {

  @Input() appAppHighlight = '';

  constructor(private htmlElement: ElementRef<HTMLInputElement>) { 
 
    this.htmlElement.nativeElement.style.color = this.appAppHighlight || 'black';
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.appAppHighlight);
    this.htmlElement.nativeElement.style.backgroundColor = this.appAppHighlight || 'pink';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.htmlElement.nativeElement.style.backgroundColor = 'yellow';
  }

  private highlight(color: string) {
    this.htmlElement.nativeElement.style.backgroundColor = color;
  }

}
