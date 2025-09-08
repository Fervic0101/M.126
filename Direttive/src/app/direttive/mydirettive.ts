import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMydirettive]'
})
export class Mydirettive {
  @Input() appMydirettive = '';

  constructor(private htmlElement: ElementRef<HTMLInputElement>) { 
 
    this.htmlElement.nativeElement.style.color = this.appMydirettive || 'black';
   
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.appMydirettive);
    this.htmlElement.nativeElement.style.backgroundColor = this.appMydirettive || 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.htmlElement.nativeElement.style.backgroundColor = 'lightblue';
  }

  @HostListener('input', ['$event']) onInput(event: Event) {
    const input = event.target as HTMLInputElement;

  
    input.value = input.value.toUpperCase();

   
    const value = Number(input.value);
    if (!isNaN(value)) {
      if (value > 10) {
        input.style.color = 'green';
      } else if (value < 10) {
        input.style.color = 'red';
      } else {
        input.style.color = 'black'; 
      }
    }
  }

  private highlight(color: string) {
    this.htmlElement.nativeElement.style.backgroundColor = color;
  }
}
