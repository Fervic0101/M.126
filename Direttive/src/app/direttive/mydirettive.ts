import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMydirettive],[appUppercase],[appColorNumber],[appClickCounter],[appPasswordStrength]',
  standalone: true,
})
export class Mydirettive {
  @Input() appMydirettive = '';
  @Input() appUppercase = '';
  @Input() appColorNumber: number | string | undefined = undefined ;
  @Input() appClickCounter: any = undefined ;
  @Input() appPasswordStrength = '';

  private clickCount = 0;

  constructor(private htmlElement: ElementRef) 
  { 
    this.htmlElement.nativeElement.style.color = this.appMydirettive || 'blue';
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.appMydirettive)
    this.htmlElement.nativeElement.style.backgroundColor = this.appMydirettive || 'green';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.htmlElement.nativeElement.style.backgroundColor = 'lightblue';
  }
  @HostListener('input') onInput() {
    this.htmlElement.nativeElement.style.textTransform = this.appUppercase || 'uppercase';
  }
  @HostListener('input') onInputNumber() {
    const inputE = this.htmlElement.nativeElement as HTMLInputElement;
    const nValue = Number(inputE.value);
    if (!isNaN(nValue) && nValue > 10) {
      this.htmlElement.nativeElement.style.backgroundColor = 'green';
    } else {
      this.htmlElement.nativeElement.style.backgroundColor = 'red';
    }
  }

  @HostListener('click') onClick() {
    this.clickCount++;
    console.log(this.clickCount);
    if(this.clickCount >= 10) {
      this.clickCount = 0;
    }
  }

  @HostListener('input') onInputPassword() {
    const input = this.htmlElement.nativeElement as HTMLInputElement;
    const password = input.value.length;
    console.log(password);
    if(password >= 6) {
      this.htmlElement.nativeElement.style.border = '10px solid green';
    } else {
      this.htmlElement.nativeElement.style.border = '10px solid red';
    }
  }
}
