import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cliente.html',
  styleUrls: ['./cliente.css']
})
export class Cliente {
  // Dati finti
  prodottiAcquistati = [
    { name: 'Latte Parmalat 1L', prezzo: 1.35 },
    { name: 'Pasta Barilla 500g', prezzo: 1.09 },
    { name: 'Olio Extra Vergine 1L', prezzo: 5.50 },
  ];
  supermercatiUsati = [
    { name: 'Coop', count: 5 },
    { name: 'Esselunga', count: 3 },
    { name: 'Carrefour', count: 2 },
  ];

  // Calcolo spesa media
  get spesaMedia(): number {
    if (!this.prodottiAcquistati.length) return 0;
    const totale = this.prodottiAcquistati.reduce((sum, p) => sum + p.prezzo, 0);
    return parseFloat((totale / this.prodottiAcquistati.length).toFixed(2));
  }
}
