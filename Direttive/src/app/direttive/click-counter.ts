import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appClickCounter]'
})


export class ClickCounter {

  counter: number=0;

  constructor(private htmlElement: ElementRef) {
    this.htmlElement.nativeElement.innerText=this.counter;
   }
  


   @HostListener('click') onClick() {
    this.counter++;
    console.log(this.counter);
    this.htmlElement.nativeElement.innerText = this.counter;
  }

}
