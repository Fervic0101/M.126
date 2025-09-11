import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appUpperCase]'
})
export class UpperCase {

  @Input() appUpperCase = ''; 

  constructor(private htmlElement: ElementRef<HTMLInputElement>) { 
      this.htmlElement.nativeElement.style.color = this.appUpperCase || 'black';
  }

  @HostListener('input', ['$event']) onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.toUpperCase();  
  }
}
