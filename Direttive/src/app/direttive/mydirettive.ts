import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMydirettive]',
})
export class Mydirettive {
  @Input() appMydirettive = '';
  constructor(private htmlElement: ElementRef) {
    this.htmlElement.nativeElement.style.color = this.appMydirettive;
  }
  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.appMydirettive);
    this.htmlElement.nativeElement.style.backgroundColor = this.appMydirettive;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.htmlElement.nativeElement.style.backgroundColor;
  }
  @HostListener('input') onInputChange() {
    this.htmlElement.nativeElement.value =
      this.htmlElement.nativeElement.value.toUpperCase();
  }
}
