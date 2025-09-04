import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAppUppercase]',
})
export class AppUppercase {
  constructor(private htmlElement: ElementRef) {}

  @HostListener('input') onInput() {
    const input = this.htmlElement.nativeElement;
    input.style.textTransform = 'uppercase';
    if (this.htmlElement.nativeElement.id === 'number') {
      const value = this.htmlElement.nativeElement.value;
      if (value > 10) {
        input.style.color = 'green';
      } else {
        input.style.color = 'red';
      }
      console.log(value);
    }
  }
}
