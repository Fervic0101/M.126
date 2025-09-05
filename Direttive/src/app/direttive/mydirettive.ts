import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMydirettive]',
})
export class Mydirettive {
    /*
  Crea una direttiva appHighlight che cambia colore di sfondo quando il mouse passa sopra. 
  Usa @Input() per permettere di scegliere il colore.*/
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
}

@Directive({
  selector: '[appUpper]',
})
export class appUpperDirettive {
  /*
  Crea una direttiva appUppercase che trasforma tutto il testo di un input in maiuscolo mentre scrivi. Usa HostListener('input').
  */
  @Input() appUpper = '';
  constructor(private htmlElement: ElementRef) 
  {
    this.htmlElement.nativeElement.style.textTransform = 'uppercase';
  }
  @HostListener('input')
  onInput() {
    this.htmlElement.nativeElement.value = this.htmlElement.nativeElement.value.toUpperCase();
  }
}

@Directive({
  selector: '[appColorNumber]',
})
export class appColorNumber {
  /*
Crea una direttiva appColorNumber per input numerici.
Se il valore è > 10 → verde, < 10 → rosso. Usare HostListener('input')
*/
  @Input() appColorNumber = '';
  constructor(private htmlElement: ElementRef) {}

  @HostListener('input')
  onInput() {
    const value = this.htmlElement.nativeElement.value;
    if (value > 10) {
      this.htmlElement.nativeElement.style.color = 'green';
    } else {
      this.htmlElement.nativeElement.style.color = 'red';
    }
  }
}

@Directive({
  selector: '[appClickCounter]',
})
export class appClickCounter {
  /*
Crea una direttiva appClickCounter che conta quante volte un elemento è stato cliccato e stampa il conteggio in console. Usa HostListener('click').
*/
  @Input() appClickCounter = '';
  private clickCount = 0;

  constructor(private htmlElement: ElementRef) {}

  @HostListener('click')
  onClick() {
    this.clickCount++;
    console.log(`Element clicked ${this.clickCount} times`);
  }
}



 @Directive({
  selector: '[appPasswordStrength]',
})
export class appPasswordStrength {
  /*
Crea una direttiva appPasswordStrength da applicare a un input password. 
Mostra dinamicamente un bordo verde/rosso secondo la forza della password: 
Debole < 6 caratteri 
Media 6-10 
Forte > 10 e contiene numeri + lettere 
Loggare anche un messaggio in console (“Debole”, “Media”, “Forte”).
*/
  @Input() appPasswordStrength = '';
  constructor(private htmlElement: ElementRef) {} 
  @HostListener('input')
  onInput() {
    const value = this.htmlElement.nativeElement.value;
    let strength = 'Debole';
    let borderColor = 'red';
    if (value.length > 10) {
      strength = 'Forte';
      borderColor = 'green';
    } else if (value.length >= 6 && value.length <= 10) {
      strength = 'Media';
      borderColor = 'orange';
    }
    this.htmlElement.nativeElement.style.borderColor = borderColor;
    console.log(strength);
  }
}
