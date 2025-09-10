
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Prodotti } from '../prodotti/prodotti'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Prodotti],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  selectedSupermarket: number = 0; 
  
  selectSupermarket(supermarket: number) {
    this.selectedSupermarket = supermarket;
  }
  
  getSupermarketName(): string {
    switch(this.selectedSupermarket) {
      case 0: return 'COOP';
      case 1: return 'Esselunga';
      case 2: return 'Carrefour';
      default: return 'COOP';
    }
  }
}
