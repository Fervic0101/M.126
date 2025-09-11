import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColorNumber]'
})
export class ColorNumber {

  @Input() appColorNumber: string = 'black'; 

  constructor(private el: ElementRef<HTMLInputElement>) {
    this.el.nativeElement.style.color = this.appColorNumber;
  }

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = Number(input.value);

    if (!isNaN(value)) {
      if (value > 10) {
        input.style.color = 'green';
      } else if (value < 10) {
        input.style.color = 'red';
      } else {
        input.style.color = this.appColorNumber; 
      }
    } else {
      input.style.color = this.appColorNumber;
    }
  }
}
