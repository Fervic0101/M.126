import { Directive, ElementRef, HostListener, Input } from '@angular/core';
var counter = 0;
@Directive({
  selector: '[appClickCounter]',
})
export class ClickCounter {
  constructor(private htmlElement: ElementRef) {}

  @HostListener('click') onClick() {
    counter++;

    console.log(counter);
  }
}
