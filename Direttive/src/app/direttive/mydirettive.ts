import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMydirettive]'
})
export class Mydirettive {
  @Input() appMydirettive = '';
  @Input() appMydirettiveSfondo = '';
 

  constructor(private htmlElement: ElementRef) 
  { 
    this.htmlElement.nativeElement.style.color = this.appMydirettive || 'green';
    this.htmlElement.nativeElement.style.backgroundColor = this.appMydirettiveSfondo || 'yellow';
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.htmlElement.nativeElement.style.backgroundColor = this.appMydirettive || 'lightblue';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.htmlElement.nativeElement.style.backgroundColor = 'yellow';
  
  }
}



@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirettiva {

  constructor(private htmlElement: ElementRef) { }

  @HostListener('input', ['$event']) onInput(event: Event) {
    const input = this.htmlElement.nativeElement as HTMLInputElement;
    const inizioTesto = input.selectionStart;
    const fineTesto = input.selectionEnd;
    input.value = input.value.toUpperCase();
    input.setSelectionRange(inizioTesto, fineTesto);

    event.preventDefault();
  }
}

@Directive({
  selector: '[appCambiaColore]'
})
export class CambiaColoreDirettiva  {

  constructor(private htmlElement: ElementRef) { }
  @HostListener('input', ['$event']) onInput(event: Event) {
    const input = this.htmlElement.nativeElement as HTMLInputElement;
    const numero = Number(input.value);
    if(numero >= 10) {
      this.htmlElement.nativeElement.style.color = 'green';
    }
    else {
      this.htmlElement.nativeElement.style.color = 'red';
    }
    event.preventDefault();
  }
}

@Directive({
  selector: '[appContatore]'
})
export class ContatoreDirettiva  {
  private contatore = 0; 

  constructor(private htmlElement: ElementRef) { }

  @HostListener('click', ['$event']) onClick(event: Event) {
    this.contatore++;
    console.log(this.contatore);  

    event.preventDefault();
  }
}

@Directive({
  selector: '[appPasswordEfficienza]'
})
export class PasswordEfficienzaDirettiva  {
  constructor(private htmlElement: ElementRef) { }
  @HostListener('input', ['$event']) onInput(event: Event) {
    var input = this.htmlElement.nativeElement as HTMLInputElement;
    var password = input.value;
    var lunghezza = password.length;
    let forza = '';
    if (lunghezza < 6){
      forza = 'Debole';
      input.style.border = '2px solid red';
    }
    else if (lunghezza >= 6 && lunghezza <= 10){
      forza = 'Media';
      input.style.border = '2px solid orange';
    }
    else {
      forza = 'Forte';
      input.style.border = '2px solid green';
    }
    
    event.preventDefault();

  }
}