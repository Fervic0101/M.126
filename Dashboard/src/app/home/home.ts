import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms'; // per ngModel
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TitleElement } from '../Direttive/title-element';
import { Container } from '../Direttive/container';
import { Prodotti } from '../prodotti/prodotti';
import { ProdottiModel } from '../Model/ProdottiModel';
import { ProdottiService } from '../services/prodotti.service';
@Component({
  selector: 'app-home',
  imports: [TitleElement,Container,Prodotti,CommonModule,FormsModule,MatCardModule,MatFormFieldModule,MatInputModule],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
searchTerm: string = '';
  prodotti: ProdottiModel[] = [];
  filteredProducts: ProdottiModel[] = [];
  hasSearched: boolean = false;

  constructor(private prodottiService: ProdottiService) {
    this.prodottiService.getProdotti().subscribe(data => {
      //tutti i prodotti in un array semplice (senza raggruppamento) cosi da avere le varianti
      this.prodotti = [...data.coop, ...data.esselunga, ...data.carrefour];
    });
  }

  onSearchChange() {
    if (this.searchTerm && this.searchTerm.trim() !== '') {
      this.hasSearched = true;
      this.filterProducts();
    } else {
      this.hasSearched = false;
      this.filteredProducts = [];
    }
  }

  filterProducts() {
    if (!this.searchTerm || this.searchTerm.trim() === '') {
      this.filteredProducts = [];
      return;
    }

    const term = this.searchTerm.toLowerCase().trim();

    this.filteredProducts = this.prodotti.filter(
      (prodotto) =>
        prodotto.name.toLowerCase().includes(term) ||
        prodotto.description.toLowerCase().includes(term)
    );
  }
  //necessario il track
  trackByName(index: number, item: any): string {
  return item.name;
}


}



