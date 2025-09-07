import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLoginStile]'
})
export class LoginStile {

  item: ElementRef<HTMLDivElement> ;
  constructor(item: ElementRef<HTMLDivElement>)
  { 
      this.item = item;
    this.item.nativeElement.style.width='200px'
    this.item.nativeElement.style.height='200px'
   
    this.item.nativeElement.style.margin = '0 auto'
     this.item.nativeElement.style.paddingBottom ='30px'
     this.item.nativeElement.style.paddingLeft = '20px'
     this.item.nativeElement.style.paddingTop = '15px'
  }
}

