import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAppUppercase]'
})
export class AppUppercase {

  constructor(private htmlElement: ElementRef) {

    this.htmlElement.nativeElement.value=this.htmlElement.nativeElement.value.toUpperCase() ?? "";
   }

   @HostListener('input') onInputChange() {
    console.log(this)
    this.htmlElement.nativeElement.value?.toUpperCase() ?? "";
  }

}


  
