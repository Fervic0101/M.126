import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTitleElement]'
})
export class TitleElement {
  
  constructor(private el: ElementRef, private renderer: Renderer2) {

    this.renderer.setStyle(this.el.nativeElement, 'background', 'linear-gradient(45deg, #f0f2f5, #e1e8ed)');
    this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid #ddd');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '12px 24px');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '25px');
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '16px');
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', '600');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.3s ease');
    this.renderer.setStyle(this.el.nativeElement, 'color', '#666');


    this.renderer.setStyle(this.el.nativeElement, 'text-align', 'center');
    this.renderer.setStyle(this.el.nativeElement, 'margin-bottom', '20px');

    
    this.el.nativeElement.addEventListener('mouseover', () => {
      this.renderer.setStyle(this.el.nativeElement, 'background', 'linear-gradient(45deg, #e1e8ed, #d0d7de)');
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(-2px)');
      this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 4px 12px rgba(0, 0, 0, 0.1)');
    });

    this.el.nativeElement.addEventListener('mouseout', () => {
      this.renderer.setStyle(this.el.nativeElement, 'background', 'linear-gradient(45deg, #f0f2f5, #e1e8ed)');
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'none');
      this.renderer.setStyle(this.el.nativeElement, 'box-shadow', 'none');
    });
  }
}
