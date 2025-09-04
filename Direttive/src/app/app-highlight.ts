import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlight {
  @Input() optionColor = '';

  constructor(private htmlElement: ElementRef) 
  { 
    this.htmlElement.nativeElement.style.backgroundColor = this.optionColor || 'green';
  }
  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.htmlElement)
    this.htmlElement.nativeElement.style.backgroundColor = this.optionColor || 'red';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.htmlElement.nativeElement.style.backgroundColor = this.optionColor || 'lightblue';
  }

}
