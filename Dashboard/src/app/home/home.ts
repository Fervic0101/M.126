import { Component } from '@angular/core';
import { TitleElement } from '../Direttive/title-element';
import { Container } from '../Direttive/container';
import { Prodotti } from '../prodotti/prodotti';
import { SearchbarComponent } from '../searchbar/searchbar';
import { Filter } from './../Model/Filter';
import { ProdottiModel } from '../Model/ProdottiModel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TitleElement, Container, Prodotti, SearchbarComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  filters: Filter = { name: '', min: null, max: null };
  highlightedProducts: string[] = [];

  private allData: ProdottiModel[][] = [];
  applyFilterToAll(filters: Filter) {
    this.filters = filters;
  }
  onProductsLoaded(index: number, data: ProdottiModel[]) {
    this.allData[index] = data;
    this.updateHighlights();
  }

  private updateHighlights() {
    const priceMap: { [name: string]: number } = {};

    // calcola il prezzo minimo per ogni prodotto tra tutti i supermercati
    this.allData.flat().forEach((p) => {
      if (!priceMap[p.name] || p.price < priceMap[p.name]) {
        priceMap[p.name] = p.price;
      }
    });

    // lista dei prodotti più economici
    this.highlightedProducts = Object.keys(priceMap);
  }
}
