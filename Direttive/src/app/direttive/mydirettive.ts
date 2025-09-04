import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMydirettive]',
})
export class Mydirettive {
  @Input() appMydirettive = '';
  private clickCount = 0;
  constructor(private htmlElement: ElementRef) {
    this.htmlElement.nativeElement.style.color = this.appMydirettive || 'lime';
  }
  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.appMydirettive);
    this.htmlElement.nativeElement.style.backgroundColor =
      this.appMydirettive || 'blue';
  }
  @HostListener('click') onClick() {
    this.clickCount++;
    console.log(this.clickCount);
  }
}
