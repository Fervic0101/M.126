import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgClass } from '@angular/common';
import prodottiData from '../prodotti.json';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    NgClass,
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  searchTerm: string = '';
  prodotti: any[] = [];
  filteredProducts: any[] = [];
  hasSearched: boolean = false;
  lowestPriceProduct: any = null;

  constructor() {
    const coop = prodottiData.coop;
    const esselunga = prodottiData.esselunga;
    const carrefour = prodottiData.carrefour;

    this.prodotti = [...coop, ...esselunga, ...carrefour]; //Unisco in un unico prodotto anche se non è il massimo
  }

  onSearchChange() {
    if (this.searchTerm && this.searchTerm.trim() !== '') {
      this.hasSearched = true; //controllo se l'input non è vuoto
      this.filterProducts(); //filtro i prodotti
    } else {
      this.hasSearched = false;
      this.filteredProducts = []; //se l'input è vuoto resetto i prodotti filtrati (non so se è un metodo efficente ma funziona)
    }
  }

  filterProducts() {
    if (!this.searchTerm || this.searchTerm.trim() === '') {
      this.filteredProducts = []; //checko se l'input è vuoto anche se penso ci siano metodi migliori
      return;
    }

    const term = this.searchTerm.toLowerCase().trim(); //case insensitive search

    this.filteredProducts = this.prodotti.filter(
      //checko se il termine è contenuto nel nome o nella descrizione (la descrizione non è necessaria ma è servito per testare e ho deciso di tenerla per comodità)
      (prodotto) =>
        prodotto.name.toLowerCase().includes(term) ||
        prodotto.description.toLowerCase().includes(term)
    );

    if (this.filteredProducts.length > 0) {
      let cheapest = this.filteredProducts[0]; //inizializzo il primo prodotto come economico

      for (let i = 1; i < this.filteredProducts.length; i++) {
        if (this.filteredProducts[i].price < cheapest.price) {
          //filtro finché non trovo il più economico
          cheapest = this.filteredProducts[i];
        }
      }

      this.lowestPriceProduct = cheapest;
    } else {
      this.lowestPriceProduct = null; //pulisco per sicurezza
    }
  }
}
