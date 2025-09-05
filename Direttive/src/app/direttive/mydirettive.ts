import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPasswordStrength]'
})
export class AppPasswordStrengthDirective {
  private clickCount = 0;

  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('input') onInput() {
    const value = this.el.nativeElement.value;
    let strength: 'Debole' | 'Media' | 'Forte' = 'Debole';
    let borderColor = 'red';

    const hasLetters = /[a-zA-Z]/.test(value);
    const hasNumbers = /[0-9]/.test(value);

    if (value.length > 10 && hasLetters && hasNumbers) {
      strength = 'Forte';
      borderColor = 'green';
    } else if (value.length >= 6) {
      strength = 'Media';
      borderColor = 'orange';
    }
    if (value.length < 6) {
      strength = 'Debole';
      borderColor = 'red';
    }
    this.el.nativeElement.style.border = `2px solid ${borderColor}`;
    console.log(strength);
  }

  @HostListener('click') onClick() {
    this.clickCount++;
    console.log(`Numero di click: ${this.clickCount}`);

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

@Directive({
  selector: '[appHighlight]'
})
export class AppHighlightDirective {
  @Input('appHighlight') highlightColor: string = 'yellow';
  private originalColor: string | null = null;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.originalColor = this.el.nativeElement.style.backgroundColor;
    this.el.nativeElement.style.backgroundColor = this.highlightColor || 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = this.originalColor || '';
  }
}

@Directive({
  selector: '[appUppercase]'
})
export class AppUppercaseDirective {
  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('input') onInput() {
    const input = this.el.nativeElement;
    input.value = input.value.toUpperCase();
  }
}

@Directive({
  selector: '[appColorNumber]'
})
export class AppColorNumberDirective {
  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('input') onInput() {
    const input = this.el.nativeElement;
    const value = Number(input.value);
    if (!isNaN(value)) {
      if (value > 10) {
        input.style.color = 'green';
      } else if (value < 10) {
        input.style.color = 'red';
      } else {
        input.style.color = '';
      }
    } else {
      input.style.color = '';
    }
  }
}