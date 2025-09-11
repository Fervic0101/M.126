import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ProdottiModel } from '../Model/ProdottiModel';

@Directive({
  selector: '[appHighlightCheap]'
})
export class HighlightCheapDirective implements OnInit {
  @Input('appHighlightCheap') prodotti: ProdottiModel[] = [];
  @Input() prodotto!: ProdottiModel;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (!this.prodotti || this.prodotti.length === 0 || !this.prodotto) return;

    let minPrice = Math.min(...this.prodotti.map(p => p.price));

    
    if (this.prodotto.price === minPrice) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#74f56bff');
      this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid green');
      this.renderer.setStyle(this.el.nativeElement, 'border-radius', '6px');
    }
  }
}

