import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appClickCounter]'
})
export class ClickCounter {

  private counter = 0;

  @HostListener('click')
  onClick() {
    this.counter++;
    console.log(`Elemento cliccato ${this.counter} volte`);
  }
}
