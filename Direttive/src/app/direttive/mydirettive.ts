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
    this.htmlElement.nativeElement.style.backgroundColor = this.appMydirettive || 'blue';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.htmlElement.nativeElement.style.backgroundColor = 'lightblue';
  }
  //Crea una direttiva appHighlight che cambia colore di sfondo quando il mouse passa sopra. Usa @Input() per permettere di scegliere il colore.
  //Crea una direttiva appUppercase che trasforma tutto il testo di un input in maiuscolo mentre scrivi. Usa HostListener('input').
  @HostListener('input') onInputChange() {
    const testo = this.htmlElement.nativeElement as HTMLElement;
    if (testo instanceof HTMLInputElement) {
      testo.value = testo.value.toUpperCase();
    }

  }
}
