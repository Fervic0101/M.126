import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  numberAttribute,
} from '@angular/core';

@Directive({
  selector: '[app-direttive]',
})
export class Mydirettive {
  //Es 1
  /*@Input() appMydirettive = '';
  constructor(private htmlElement: ElementRef) {
    this.htmlElement.nativeElement.style.color = this.appMydirettive || 'black';
  }
  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.appMydirettive);
    this.htmlElement.nativeElement.style.backgroundColor =
      this.appMydirettive || 'red';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.htmlElement.nativeElement.style.backgroundColor = 'lightblue';
  }*/

  //Es 2
  /*@Input() appdirettive = '';
  constructor(private htmlElement: ElementRef) {}
  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.htmlElement.nativeElement.value = input.value.toUpperCase();
  }*/

  //Es 3
  /*@Input() appdirettive = '';
  constructor(private htmlElement: ElementRef) {}
  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    if (Number(input.value) > 10) {
      this.htmlElement.nativeElement.style.color = 'green';
    } else {
      this.htmlElement.nativeElement.style.color = 'red';
    }
  }*/

  // Es 4
  /*counter: number = 0;
  constructor(private htmlElement: ElementRef) {}
  @HostListener('click')
  ClickCounter() {
    this.htmlElement.nativeElement.button = this.counter++;
    console.log(this.counter);
  }*/

  //Es 5
  @Input() appdirettive = '';
  password: string = '';
  constructor(private htmlElement: ElementRef) {}
  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.value.length < 6) {
      console.log('debole');
      this.htmlElement.nativeElement.style.borderColor = 'red';
    } else if (/\d/.test(input.value) && input.value.length >= 6) {
      this.htmlElement.nativeElement.style.borderColor = 'green';
      console.log('forte');
    } else {
      this.htmlElement.nativeElement.style.borderColor = 'yellow';
      console.log('Media');
    }
  }
}
