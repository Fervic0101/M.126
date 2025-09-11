import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPasswordStrength]'
})
export class PasswordStrength {
  constructor(private htmlElement: ElementRef, private renderer: Renderer2) {}

  @HostListener('input') onInput() {
    const value: string = this.htmlElement.nativeElement.value;

    let strength = '';
    let color = '';

    if (value.length < 6) {
      strength = 'Debole';
      color = 'red';
    } else if (value.length <= 10) {
      strength = 'Media';
      color = 'orange';
    } else if (value.length > 10 && /[A-Za-z]/.test(value) && /\d/.test(value)) {
      strength = 'Forte';
      color = 'green';
    } else {
 
      strength = 'Media';
      color = 'orange';
    }

    this.renderer.setStyle(this.htmlElement.nativeElement, 'border', `2px solid ${color}`);

    console.log(strength);
  }
}
