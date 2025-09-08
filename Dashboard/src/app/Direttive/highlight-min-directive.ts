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
      // filtriamo solo i prezzi non nulli
      const prices: number[] = [
        this.prodotto.coopPrice,
        this.prodotto.esselungaPrice,
        this.prodotto.carrefourPrice
      ].filter((x): x is number => x != null); // il tipo x is number dice a TS che sono solo numeri

      if (prices.length === 0) return; // nessun prezzo valido

      const min = Math.min(...prices);

      const current = this.prodotto[this.prezzo];
      if (current !== null && current === min) {
        this.el.nativeElement.style.backgroundColor = 'lightgreen';
        this.el.nativeElement.style.fontWeight = 'bold';
      }
    }
  }
}
