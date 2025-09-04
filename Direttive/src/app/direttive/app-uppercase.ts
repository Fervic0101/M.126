import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAppUppercase]',
})
export class AppUppercase {
  constructor(private htmlElement: ElementRef) {}

  @HostListener('input') onInput() {
    this.htmlElement.nativeElement.style.textTransform = 'uppercase';
  }
}
