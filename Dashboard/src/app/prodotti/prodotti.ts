import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, } from '@angular/common/http';
import { ProdottiModel } from '../Model/ProdottiModel';
import { HighlightMinDirective } from '../Direttive/highlight-min-directive';
import { ProdottiService } from '../services/prodotti.service';

@Component({
  selector: 'app-prodotti',
  standalone: true,
  templateUrl: './prodotti.html',
  styleUrls: ['./prodotti.css'],
  imports: [CommonModule, HighlightMinDirective]
})
export class Prodotti implements OnInit {

  Lista: Array<ProdottiModel> = [];

  constructor(private prodottiService: ProdottiService) {}

  ngOnInit() {
    this.prodottiService.getProdotti().subscribe(data => {

      // funzione per raggruppare prodotti simili perche sono diversi di poco
      const getKey = (name: string): string => {
        name = name.toLowerCase();
        if (name.includes('latte')) return 'Latte';
        if (name.includes('pasta')) return 'Pasta';
        if (name.includes('olio')) return 'Olio';
        if (name.includes('mozzarella')) return 'Mozzarella';
        if (name.includes('yogurt')) return 'Yogurt';
        if (name.includes('uova')) return 'Uova';
        if (name.includes('biscotti')) return 'Biscotti';
        if (name.includes('riso')) return 'Riso';
        if (name.includes('acqua')) return 'Acqua';
        if (name.includes('sale')) return 'Sale';
        if (name.includes('tonno')) return 'Tonno';
        if (name.includes('pomodor') || name.includes('passata')) return 'Pomodoro';
        if (name.includes('pane')) return 'Pane';
        if (name.includes('detersivo')) return 'Detersivo';
        if (name.includes('carta ig')) return 'Carta igienica';
        if (name.includes('carta da')) return 'Carta da cucina';
        if (name.includes('shampoo')) return 'Shampoo';
        if (name.includes('sapone')) return 'Sapone';
        if (name.includes('dent')) return 'Dentifricio';
        if (name.includes('batterie')) return 'Batterie';
        if (name.includes('zucchero')) return 'Zucchero';
        if (name.includes('shampo')) return 'Shampo';
        if (name.includes('sacch')) return 'Sacchetti';


        // fallback: usa nome completo
        return name;
      };

      const ProdottiRaggruppati: { [key: string]: ProdottiModel } = {};

      // array dei supermercati in ordine: coop, esselunga, carrefour
      const stores = [data.coop, data.esselunga, data.carrefour];

      stores.forEach((store, index) => {
        store.forEach((p: any) => {
          const key = getKey(p.name);
          //uso come nome prodotti il nome comune (la key)
          if (!ProdottiRaggruppati[key]) {
            ProdottiRaggruppati[key] = new ProdottiModel(
              key, '', '', false,
              null, null, null // inizialmente tutti i prezzi a null
            );
          }

          // assegna il prezzo in base al supermercato
          if (index === 0) ProdottiRaggruppati[key].coopPrice = p.available ? p.price : null;
          if (index === 1) ProdottiRaggruppati[key].esselungaPrice = p.available ? p.price : null;
          if (index === 2) ProdottiRaggruppati[key].carrefourPrice = p.available ? p.price : null;
        });
      });

      // convertiamo in array per la tabella
      this.Lista = Object.values(ProdottiRaggruppati);
    });
  }

  // calcola il prezzo minimo tra i tre supermercati
  getMinPrice(p: ProdottiModel): number {
    const prices = [p.coopPrice, p.esselungaPrice, p.carrefourPrice].filter(x => x != null);
    return prices.length ? Math.min(...prices) : 0;
  }

}
