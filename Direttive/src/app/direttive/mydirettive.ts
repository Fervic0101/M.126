import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMydirettive]'
})
export class Mydirettive {
  @Input() appMydirettive = '';
  clickCount = 0; //variabili vanno dichiarate prima del costruttore 
  constructor(private htmlElement: ElementRef) 
  { 
    this.htmlElement.nativeElement.style.color = this.appMydirettive || 'black';
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.appMydirettive)
    this.htmlElement.nativeElement.style.backgroundColor = this.appMydirettive || 'white';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.htmlElement.nativeElement.style.backgroundColor = 'lightblue';
  }
  //Crea una direttiva appHighlight che cambia colore di sfondo quando il mouse passa sopra. Usa @Input() per permettere di scegliere il colore.
  //Crea una direttiva appUppercase che trasforma tutto il testo di un input in maiuscolo mentre scrivi. Usa HostListener('input').
  @HostListener('input') onInputChange() {
    const testo = this.htmlElement.nativeElement;
    if (testo instanceof HTMLInputElement) {
      testo.value = testo.value.toUpperCase();
    }
    // per input numerici. Se il valore è > 10 → verde, < 10 → rosso. Usare HostListener('input') per controllare il valore e cambiare stile dinamicamente.
    if (testo.type === 'number') {
      const num = testo.value;
      testo.style.color = num > 10 ? 'green' : 'red';
    }
    //Crea una direttiva appPasswordStrength da applicare a un input password. Mostra dinamicamente un bordo verde/rosso secondo la forza della password:
    //Debole < 6 caratteri. Media 6-10. Forte > 10 e contiene numeri + lettere

    if (testo.type === 'password') {
      const val = testo.value;
      let strength = 'Debole';
      let borderColor = 'red';

      const hasLetters = /[a-zA-Z]/.test(val); //verifica se il valore val contiene almeno un carattere
      const hasNumbers = /[0-9]/.test(val);

      if (val.length > 10 && hasLetters && hasNumbers) {
        strength = 'Forte';
        borderColor = 'green';
      } else if (val.length >= 6) {
        strength = 'Media';
        borderColor = 'orange';
      } //di default lo avevo messo rosso

      testo.style.border = `4px solid ${borderColor}`;

      //Loggare anche un messaggio in console (“Debole”, “Media”, “Forte”).
      console.log(strength);
    }
  }

    //Conta quante volte un elemento è stato cliccato e logga in console il numero di click. Usare HostListener('click').
  @HostListener('click')  onClick(){
    this.clickCount++;
    console.log(`Elemento cliccato ${this.clickCount} volte`);
  }
  }
  






