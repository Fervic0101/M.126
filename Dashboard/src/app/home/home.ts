import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Aggiungi questo import
import { Prodotti } from '../prodotti/prodotti'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, Prodotti], // Aggiungi FormsModule
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  activeMarket: number = 0; // Rinominato da selectedSupermarket
  searchTerm: string = '';
  minPrice: number = 0;
  maxPrice: number = 100;
  onlyAvailable: boolean = false;

  // Rinominato da selectSupermarket
  setActiveMarket(market: number) {
    this.activeMarket = market;
  }

  // Rinominato da getSupermarketName
  getCurrentMarket(): string {
    switch(this.activeMarket) {
      case 0: return 'COOP';
      case 1: return 'Esselunga';
      case 2: return 'Carrefour';
      default: return 'COOP';
    }
  }

  resetFilters() {
    this.searchTerm = '';
    this.minPrice = 0;
    this.maxPrice = 100;
    this.onlyAvailable = false;
  }
}