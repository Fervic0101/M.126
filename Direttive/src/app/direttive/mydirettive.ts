import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMydirettive]'
})
export class Mydirettive {
  @Input() appMydirettive = '';
  constructor(private htmlElement: ElementRef) 
  { 
    this.htmlElement.nativeElement.style.color = this.appMydirettive || 'yellow';
  }
  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.appMydirettive)
    this.htmlElement.nativeElement.style.backgroundColor = this.appMydirettive || 'yellow';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.htmlElement.nativeElement.style.backgroundColor = 'lightblue';
  }

  private highlight(color: string) {
    this.htmlElement.nativeElement.style.backgroundColor = color;
  }
}

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {
  @HostListener('input', ['$event']) onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const start = input.selectionStart;
    const end = input.selectionEnd;
    
    input.value = input.value.toUpperCase();
    input.setSelectionRange(start, end);
  }
}

@Directive({
  selector: '[appColorNumber]'
})
export class ColorNumberDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = parseInt(input.value) || 0;

    if (value > 10) {
      this.el.nativeElement.style.borderColor = 'green';
    } else if (value < 10) {
      this.el.nativeElement.style.borderColor = 'red';
    } else {
      this.el.nativeElement.style.borderColor = '';
    }
  }
}

@Directive({
  selector: '[appClickCounter]'
})
export class ClickCounterDirective {
  private count = 0;

  @HostListener('click') onClick() {
    this.count++;
    console.log(`Element clicked ${this.count} times`);
  }
}

@Directive({
  selector: '[appPasswordStrength]'
})
export class PasswordStrengthDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    
    let strength = 'Debole';
    let color = 'red';

    if (value.length >= 6 && value.length <= 10) {
      strength = 'Media';
      color = 'orange';
    } else if (value.length > 10 && /[0-9]/.test(value) && /[a-zA-Z]/.test(value)) {
      strength = 'Forte';
      color = 'green';
    }

    this.el.nativeElement.style.borderColor = color;
    this.el.nativeElement.style.borderWidth = '2px';
    this.el.nativeElement.style.borderStyle = 'solid';
    
    console.log(strength);
  }
}