import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColorNumber]'
})
export class ColorNumber {

  constructor(private htmlElement: ElementRef) {

   }

   @HostListener('input') onInputChange() {
    console.log(this.htmlElement.nativeElement.value);
    this.htmlElement.nativeElement.style.color = this.htmlElement.nativeElement.value < 10 ? "red" : "green";
  }

}
