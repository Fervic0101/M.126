import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, } from '@angular/common/http';
import { ProdottiModel } from '../Model/ProdottiModel';
import { HighlightMinDirective } from '../Direttive/highlight-min-directive';

@Component({
  selector: 'app-prodotti',
  standalone: true,
  templateUrl: './prodotti.html',
  styleUrls: ['./prodotti.css'],
  imports: [CommonModule, HighlightMinDirective]
})
export class Prodotti implements OnInit {

  Lista: Array<ProdottiModel> = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('/prodotti.json').subscribe(data => {

      // funzione per raggruppare prodotti simili
      const getKey = (name: string): string => {
        name = name.toLowerCase();
        if (name.includes('latte')) return 'latte';
        if (name.includes('pasta')) return 'pasta';
        if (name.includes('olio')) return 'olio';
        if (name.includes('mozzarella')) return 'mozzarella';
        if (name.includes('yogurt')) return 'yogurt';
        if (name.includes('uova')) return 'uova';
        // fallback: usa nome completo
        return name;
      };

      const groupedProducts: { [key: string]: ProdottiModel } = {};

      // array dei supermercati in ordine: coop, esselunga, carrefour
      const stores = [data.coop, data.esselunga, data.carrefour];

      stores.forEach((store, index) => {
        store.forEach((p: any) => {
          const key = getKey(p.name);

          if (!groupedProducts[key]) {
            groupedProducts[key] = new ProdottiModel(
              p.name, p.image, p.description, p.available,
              null, null, null // inizialmente tutti i prezzi a null
            );
          }

          // assegna il prezzo in base al supermercato
          if (index === 0) groupedProducts[key].coopPrice = p.available ? p.price : null;
          if (index === 1) groupedProducts[key].esselungaPrice = p.available ? p.price : null;
          if (index === 2) groupedProducts[key].carrefourPrice = p.available ? p.price : null;
        });
      });

      // convertiamo in array per la tabella
      this.Lista = Object.values(groupedProducts);
    });
  }

  // calcola il prezzo minimo tra i tre supermercati
  getMinPrice(p: ProdottiModel): number {
    const prices = [p.coopPrice, p.esselungaPrice, p.carrefourPrice].filter(x => x != null);
    return prices.length ? Math.min(...prices) : 0;
  }

}
