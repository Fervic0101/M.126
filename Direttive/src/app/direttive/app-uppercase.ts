import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAppUppercase]',
})
export class AppUppercase {
  constructor(private htmlElement: ElementRef) {}

  @HostListener('input') onInput() {
    this.htmlElement.nativeElement.style.textTransform = 'uppercase';
  }

  @HostListener('input') numberColor() {
    if (this.htmlElement.nativeElement.id === 'number') {
      const value = this.htmlElement.nativeElement.value;
      if (value > 10) {
        this.htmlElement.nativeElement.style.color = 'green';
      } else {
        this.htmlElement.nativeElement.style.color = 'red';
      }
    }
  }
}
