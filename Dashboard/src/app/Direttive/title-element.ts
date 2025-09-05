import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitleElement]'
})
export class TitleElement {

  item : any;
  constructor(item : ElementRef) 
  { 
    this.item = item;
    this.item.nativeElement.style.fontSize = '40px';
    this.item.nativeElement.style.fontWeight = 'bold';
    this.item.nativeElement.style.margin = '20px 0';
    this.item.nativeElement.style.textAlign = 'center';
    this.item.nativeElement.style.color = '#3f51b5'; // Colore blu
    this.item.nativeElement.style.fontFamily = 'Arial, sans-serif';
  }

}
