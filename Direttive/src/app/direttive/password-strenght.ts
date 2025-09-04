import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPasswordStrenght]',
})
export class PasswordStrenght {
  constructor(private htmlElement: ElementRef) {}

  @HostListener('input') onInput() {
    let input = '';
    if (this.htmlElement.nativeElement.id === 'password') {
      input = this.htmlElement.nativeElement.value;
    }

    if (input.length < 6) {
      this.htmlElement.nativeElement.style.border = '2px solid red';
      console.log('Debole');
    } else if (input.length >= 6 && input.length < 10) {
      this.htmlElement.nativeElement.style.border = '2px solid orange';
      console.log('Media');
    } else if (input.length >= 10 && /\d/.test(input)) {
      this.htmlElement.nativeElement.style.border = '2px solid green';
      console.log('Forte');
    }
  }
}
