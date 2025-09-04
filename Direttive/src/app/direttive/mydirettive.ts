import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMydirettive]',
})
export class Mydirettive {
  private clickCounter = 0;
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
  @HostListener('input') onInput() {
    const number = this.htmlElement.nativeElement.value;
    if (number > 10) this.htmlElement.nativeElement.style.color = 'green';
    else this.htmlElement.nativeElement.style.color = 'red';
  }
  @HostListener('click') onClick() {
    this.clickCounter++;
    console.log(this.clickCounter);
  }
}
