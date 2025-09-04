import { Directive, ElementRef, HostListener, Input } from '@angular/core';
var counter = 0;
@Directive({
  selector: '[appMydirettive]'
})
export class Mydirettive {
  @Input() appMydirettive = '';

  constructor(private htmlElement: ElementRef) 
  { 
    //this.htmlElement.nativeElement.style.color = this.appMydirettive || 'yellow';
  }
  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.appMydirettive)
    //this.htmlElement.nativeElement.style.backgroundColor = this.appMydirettive || 'red';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.htmlElement.nativeElement.style.backgroundColor = this.appMydirettive;
  }
  /*
  @HostListener('input') onKeyPress() {
    
    
    console.log(this.htmlElement.nativeElement.value.toUpperCase());
    
  }
 */
  @HostListener('input') OnChange() {
 
    if(this.htmlElement.nativeElement.value>10){
      this.htmlElement.nativeElement.style.color =  this.appMydirettive || 'green'
    }else{
      this.htmlElement.nativeElement.style.color =  this.appMydirettive || 'red'
    }

  }
    
   @HostListener('click') ClickCounter() 
   {
    counter++;
    console.log(counter);
      
  }
}

