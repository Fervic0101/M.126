import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// Direttiva per evidenziare il testo
@Directive({
  selector: '[appMydirettive]'
})
export class Mydirettive {
  @Input() appMydirettive = 'red';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.appMydirettive;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}

// Direttiva per convertire in maiuscolo
@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const cursorPosition = input.selectionStart;
    input.value = input.value.toUpperCase();
    input.setSelectionRange(cursorPosition, cursorPosition);
  }
}

// Direttiva per cambiare colore in base al numero
@Directive({
  selector: '[appColorNumber]'
})
export class ColorNumberDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input') onInput() {
    const value = parseFloat(this.el.nativeElement.value);
    if (isNaN(value)) {
      this.el.nativeElement.style.borderColor = '#ccc';
    } else if (value > 10) {
      this.el.nativeElement.style.borderColor = 'green';
    } else if (value < 10) {
      this.el.nativeElement.style.borderColor = 'red';
    } else {
      this.el.nativeElement.style.borderColor = 'orange';
    }
  }
}

// Direttiva per contare i click
@Directive({
  selector: '[appClickCounter]'
})
export class ClickCounterDirective {
  private clickCount = 0;

  @HostListener('click') onClick() {
    this.clickCount++;
    console.log(`Elemento cliccato ${this.clickCount} volte`);
  }
}

// Direttiva per valutare la forza della password
@Directive({
  selector: '[appPasswordStrength]'
})
export class PasswordStrengthDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input') onInput() {
    const value = this.el.nativeElement.value;
    let strength = 'Debole';
    let color = 'red';

    if (value.length >= 6) {
      strength = 'Media';
      color = 'orange';
    }
    
    if (value.length > 10 && /[0-9]/.test(value) && /[a-zA-Z]/.test(value)) {
      strength = 'Forte';
      color = 'green';
    }

    this.el.nativeElement.style.borderColor = color;
    console.log(strength);
  }
}