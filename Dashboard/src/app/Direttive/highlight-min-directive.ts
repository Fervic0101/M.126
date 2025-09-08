import { Directive, Input, OnInit, ElementRef} from '@angular/core';
import { ProdottiModel } from '../Model/ProdottiModel';

@Directive({
  selector: '[appHighlightMinDirective]',
  standalone: true
})
export class HighlightMinDirective {

constructor(private el: ElementRef) {}
@Input('appHighlightMinDirective') prodotto!: ProdottiModel;
@Input() prezzo!: 'coopPrice' | 'esselungaPrice' | 'carrefourPrice';

  ngOnInit() {
    if (this.prodotto) {
      const min = Math.min(
        this.prodotto.coopPrice,
        this.prodotto.esselungaPrice,
        this.prodotto.carrefourPrice
      );

      const current = this.prodotto[this.prezzo];
      if (current === min) {
        this.el.nativeElement.style.backgroundColor = 'lightgreen';
        this.el.nativeElement.style.fontWeight = 'bold';
      }
    }
  }
}


