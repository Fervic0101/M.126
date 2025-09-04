
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPasswordForza]'
})
export class PasswordForza {

  forza: number=0;


  constructor(private htmlElement: ElementRef) {
    this.htmlElement.nativeElement.style.backgroundColor= this.getColor(this.forza);
   }

   @HostListener('input') onInputChange() {
    
    console.log(this.forza);
    this.htmlElement.nativeElement.style.color = this.htmlElement.nativeElement.value < 10 ? "red" : "green";

    const getColor(forza:number) => {
      if(forza < 6) return "red"
      if(forza >=6 && forza <= 10) return "orange";
      return "green";
    }
  }

}

  

}
