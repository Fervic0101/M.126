import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavButton]'
})
export class NavButton {
  item: any;

  constructor(item : ElementRef) 
  {
    this.item = item;
    this.item.nativeElement.style.color = 'white';
    this.item.nativeElement.style.border = 'none';
    this.item.nativeElement.style.padding = '10px 20px';
    this.item.nativeElement.style.cursor = 'pointer';
    this.item.nativeElement.style.fontSize = '16px';
    this.item.nativeElement.style.borderRadius = '4px';
    this.item.nativeElement.style.width = '50%'; 
    //console.log(this.item);

  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('lightblue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('transparent');
  }

  private highlight(color: string) {
    this.item.nativeElement.style.backgroundColor = color;
  }
}
