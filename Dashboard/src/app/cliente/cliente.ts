import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdottiService } from '../services/prodotti.service';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cliente.html',
  styleUrls: ['./cliente.css']
})
export class Cliente {
  prodottiAcquistati = 0;
  supermercatoPreferito = '';
  spesaMedia = 0;
  storicoAcquisti: any[] = [];
  prodotti: any = {};

  constructor(private prodottiService: ProdottiService) {}

  ngOnInit() {
    this.prodottiService.getProdotti().subscribe(data => {
      this.prodotti = data;
      // Unisci tutti i prodotti dei supermercati
  const acquisti: any[] = [];
      ['coop', 'esselunga', 'carrefour'].forEach(supermercato => {
        if (data[supermercato]) {
          data[supermercato].forEach((p: any) => {
            acquisti.push({
              prodotto: p.name,
              supermercato: supermercato.charAt(0).toUpperCase() + supermercato.slice(1),
              prezzo: p.price,
              data: '08/09/2025'
            });
          });
        }
      });
      this.storicoAcquisti = acquisti;
      this.prodottiAcquistati = acquisti.length;
      // Calcola supermercato più usato
      const counts: Record<string, number> = {};
      acquisti.forEach(a => {
        counts[a.supermercato] = (counts[a.supermercato] || 0) + 1;
      });
      this.supermercatoPreferito = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b, '');
      this.spesaMedia = parseFloat((acquisti.reduce((acc, p) => acc + p.prezzo, 0) / acquisti.length).toFixed(2));
    });
  }
}
